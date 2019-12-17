<template>
  <div>
    <b-container fluid>
      <!-- timer -->
      <b-row id="scoreboard">
        <b-col cols="8" id="timer">
          <p v-if="this.gameStarted != true">Countdown</p>
          <p v-else>&#9201; {{showTime}}</p>
        </b-col>
        <b-col v-if="gameStarted" cols="4" id="score">
          <p>{{score}} &#127941;</p>
        </b-col>
      </b-row>
      <!-- word -->
      <b-row id="word">
        <b-col>
          <div id="output">
            <b-row id="clutter">
              <b-col>{{clutteredCountry}}</b-col>
            </b-row>
            <b-row id="hint" v-if="hint">
              <b-col>
                <b-col>{{hintText}}</b-col>
              </b-col>
            </b-row>
          </div>
          <div id="input">
            <b-row v-if="gameStarted">
              <b-col>
                <b-form-group>
                  <b-input-group>
                    <b-form-input
                      :size="this.getScreenSize"
                      :disabled="gameFinished"
                      v-model="userInput"
                      v-on:keyup.enter="checkAnswer"
                    ></b-form-input>
                    <div v-if="this.getScreenSize == 'lg'">
                      <b-input-group-append>
                        <b-button
                          :size="this.getScreenSize"
                          text="Button"
                          variant="success"
                          :disabled="gameFinished"
                          @click="checkAnswer"
                        >Take a Guess</b-button>
                      </b-input-group-append>
                      <b-input-group-append>
                        <b-button
                          :size="this.getScreenSize"
                          text="Button"
                          variant="warning"
                          :disabled="gameFinished"
                          @click="skipAnswer"
                        >Skip</b-button>
                      </b-input-group-append>
                    </div>
                  </b-input-group>
                  <b-form-group v-if="this.getScreenSize != 'lg'" label-cols-sm="12">
                    <b-button-group>
                      <b-button
                        :size="this.getScreenSize"
                        text="Button"
                        variant="success"
                        :disabled="gameFinished"
                        @click="checkAnswer"
                      >Guess</b-button>
                      <b-button
                        :size="this.getScreenSize"
                        text="Button"
                        variant="warning"
                        :disabled="gameFinished"
                        @click="skipAnswer"
                      >Skip</b-button>
                    </b-button-group>
                  </b-form-group>
                </b-form-group>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
      <!-- buttons -->
      <b-row class="justify-content-md-center" id="buttons">
        <b-col>
          <b-button-toolbar>
            <b-button-group>
              <b-button
                variant="primary"
                :disabled="gameStarted"
                @click="startGame"
                :size="this.getScreenSize"
              >Start</b-button>
              <b-button
                variant="warning"
                v-if="gameStarted"
                @click="giveHint"
                :size="this.getScreenSize"
              >
                Hint
                <b-badge variant="light">{{hintsLeft}}</b-badge>
              </b-button>
              <b-button
                variant="danger"
                v-if="gameStarted"
                @click="restart"
                :size="this.getScreenSize"
              >Restart</b-button>
            </b-button-group>
          </b-button-toolbar>
        </b-col>
      </b-row>
      <!-- scoreboard -->
      <b-row class="justify-content-md-center" id="scoreboard">
        <b-col>
          <Scoreboard
            :totalScore="this.score"
            :totalWords="this.totalWords.length"
            :totalCorrectWords="this.totalCorrectWords"
            :totalIncorrectWords="this.totalIncorrectWords"
            :gameFinished="this.gameFinished"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
//tools
import CountryController from "./../controllers/Country";
import ClutterTool from "./../helpers/Clutter";

//components
import Scoreboard from "./ScoreBoard";

export default {
  name: "Canvas",
  components: {
    Scoreboard
  },
  data: function() {
    return {
      //word related
      country: "clutter",
      clutteredCountry: "clutter",
      //game state
      gameStarted: false,
      gameFinished: false,
      hint: false,
      hintsLeft: 3,
      hintText: "",
      timerObject: null,
      //user
      score: 0,
      userInput: "",
      totalWords: [],
      totalCorrectWords: [],
      totalIncorrectWords: [],
      mistakes: 0,
      //game rules
      timer: 60,
      gameTime: 10,
      maxMistakes: 3,
      //other
      screenSize: { width: screen.width, height: screen.height }
    };
  },
  computed: {
    showTime: function() {
      return this.timer;
    },
    getScreenSize: function() {
      var size = this.screenSize.width;
      var res = "";
      if (size <= 350) {
        res = "sm";
      } else if (350 < size && size <= 450) {
        res = "md";
      } else {
        res = "lg";
      }
      console.log(res);
      return res;
    }
  },
  methods: {
    //rules
    startGame: function() {
      this.gameStarted = true;
      this.fetchRandomCountry();
      this.startTimer();
    },
    startTimer: function() {
      var component = this;
      this.timerObject = setInterval(function() {
        component.timer--;
        if (component.timer == 0) {
          clearInterval(component.timerObject);
          component.totalIncorrectWords.push(component.country);
          component.gameFinished = true;
        }
      }, 1000);
    },
    fetchRandomCountry: function() {
      var component = this;
      CountryController.fetchCountries().then(function(list) {
        var country = list[ClutterTool.randomNumber(0, list.length)].name;
        var clutteredCountry = ClutterTool.clutter(country);
        component.country = country;
        component.clutteredCountry = clutteredCountry;
        component.totalWords.push(country);
      });
    },
    decreaseScore: function() {
      if (this.score < 0) {
        this.score--;
      }
    },
    //option
    restart: function() {
      //country
      this.country = "clutter";
      this.clutteredCountry = "clutter";
      this.totalWords = [];
      //user
      this.score = 0;
      this.mistakes = 0;
      this.userInput = "";
      //state
      this.gameStarted = false;
      this.gameFinished = false;
      this.timer = this.gameTime;
    },
    checkAnswer: function() {
      if (
        this.userInput.toLowerCase().toString() ==
        this.country.toLowerCase().toString()
      ) {
        this.score++;
        this.userInput = "";
        this.totalCorrectWords.push(this.country);
        this.fetchRandomCountry();
      } else {
        this.mistakes++;
        this.userInput = "";
        if (this.mistakes % this.maxMistakes == 0) {
          this.totalIncorrectWords.push(this.country);
          this.fetchRandomCountry();
          this.decreaseScore();
        }
      }
    },
    skipAnswer: function() {
      this.decreaseScore();
      this.fetchRandomCountry();
    },
    giveHint: function() {
      if (this.hint == false) {
        if (this.hintsLeft == 0) {
          return;
        } else {
          this.hintsLeft--;
        }
        this.hint = true;
        this.hintText = "";
        for (let i = 0; i < this.country.length; i++) {
          var char = this.country[i].toLowerCase();
          if (
            char == "a" ||
            char == "e" ||
            char == "i" ||
            char == "o" ||
            char == "u"
          ) {
            this.hintText += ".";
          } else {
            this.hintText += char;
          }
        }
        setTimeout(this.giveHint, 500);
      } else {
        this.hint = false;
      }
    },
    //other
    fetchScreenSize: function() {
      this.screenSize = { width: screen.width, height: screen.height };
      console.log(this.screenSize.width);
    }
  },
  beforeMount: function() {
    this.fetchScreenSize();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* scoreboard */
#scoreboard {
  margin-top: 10vh;
  padding: 2vh 2vw;
}

#timer {
  font-weight: bold;
  font-size: 4em;
}

#score {
  font-weight: bold;
  font-size: 4em;
  text-align: end;
}

/* word */
#word {
  margin-top: 10vh;
  padding: 2vh 2vw;

  font-size: 5em;
}

#output {
  margin: 2.5vh 0vw;
  padding: 1vh 1.5vw;
  border-radius: 25px;
  background-color: rgba(0, 0, 0, 0.247);
}

/* options */
#buttons {
  margin-top: 10vh;
  padding: 2vh 2vw;
}

@media only screen and (max-width: 600px) {
  #timer {
    font-size: 2em;
    font-weight: bold;
  }

  #score {
    font-size: 2em;
    font-weight: bold;
  }

  #word {
    font-size: 2.5em;
  }
}

@media only screen and (max-width: 350) {
  #timer {
    font-size: 1em;
    font-weight: bold;
  }

  #score {
    font-size: 1em;
    font-weight: bold;
  }

  #word {
    font-size: 1.5em;
  }
}
</style>
