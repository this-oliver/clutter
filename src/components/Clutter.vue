<template>
  <div>
    <b-container fluid>
      <!-- timer -->
      <b-row id="scoreboard" v-if="gameState.started">
        <b-col cols="8" id="timer">
          <p>&#9201; {{showTime}}</p>
        </b-col>
        <b-col cols="4" id="score">
          <p>{{gameState.score}} &#127941;</p>
        </b-col>
      </b-row>
      <b-row id="countdown" v-else>
        <b-col>
          <p>{{gameState.countdown}}</p>
        </b-col>
      </b-row>
      <!-- word -->
      <b-row>
        <b-col>
          <WordBoard
            v-bind:words="words"
            v-bind:rules="rules"
            v-bind:gameState="gameState"
            v-bind:screenSize="getScreenSize"
            v-on:skipAnswer="skipAnswer"
            v-on:increaseScore="increaseScore"
            v-on:increaseMistake="increaseMistake"
          />
        </b-col>
      </b-row>
      <!-- buttons -->
      <b-row class="justify-content-md-center" id="buttons">
        <b-col>
          <b-button-toolbar>
            <b-button-group>
              <b-button
                variant="warning"
                v-if="gameState.started"
                @click="giveHint"
                :size="this.getScreenSize"
              >
                Hint
                <b-badge variant="light">{{gameState.hintsLeft}}</b-badge>
              </b-button>
              <b-button
                variant="danger"
                v-if="gameState.started"
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
            :totalScore="this.gameState.score"
            :totalWords="this.words.totalWords.length"
            :totalCorrectWords="this.words.totalCorrectWords"
            :totalIncorrectWords="this.words.totalIncorrectWords"
            :gameFinished="gameState.finished"
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
import WordBoard from "./WordBoard";
import Scoreboard from "./ScoreBoard";

export default {
  name: "clutter",
  components: {
    WordBoard,
    Scoreboard
  },
  data: function() {
    return {
      //word related
      words: {
        country: "clutter",
        clutteredCountry: "clutter",
        totalWords: [],
        totalCorrectWords: [],
        totalIncorrectWords: []
      },
      //game state
      gameState: {
        started: false,
        finished: false,
        //hint
        hint: false,
        hintsLeft: 3,
        hintText: "",
        //time
        timer: 60,
        countdown: 3,
        timerObject: null,
        //score
        score: 0,
        mistakes: 0
      },
      //game rules
      rules: {
        maxTime: 60,
        maxHintTime: 3000,
        maxCountdown: 3000,
        maxMistakes: 3
      },
      //other
      screenSize: { width: screen.width, height: screen.height }
    };
  },
  computed: {
    showTime: function() {
      return this.gameState.timer;
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
      return res;
    }
  },
  methods: {
    //rules
    startCountdown: function() {
      var component = this;
      this.gameState.timerObject = setInterval(function() {
        component.gameState.countdown--;
        if (component.gameState.countdown == 0) {
          clearInterval(component.gameState.timerObject);
          component.countdown = component.maxCountdown;
          component.startGame();
        }
      }, 1000);
    },
    startGame: function() {
      this.gameState.started = true;
      this.fetchRandomCountry();
      this.startTimer();
    },
    startTimer: function() {
      var component = this;
      this.gameState.timerObject = setInterval(function() {
        component.gameState.timer--;
        if (component.gameState.timer == 0) {
          clearInterval(component.gameState.timerObject);
          component.gameState.finished = true;
        }
      }, 1000);
    },
    fetchRandomCountry: function() {
      var component = this;
      CountryController.fetchCountries().then(function(list) {
        var country = ClutterTool.removeBrackets(
          list[ClutterTool.randomNumber(0, list.length)].name
        );
        var clutteredCountry = ClutterTool.removeBrackets(
          ClutterTool.clutter(country)
        );

        component.words.country = country;
        component.words.clutteredCountry = clutteredCountry;
        component.words.totalWords.push(country);
      });
    },
    increaseScore: function() {
      this.gameState.score++;
      this.words.totalCorrectWords.push(this.words.country);
      this.fetchRandomCountry();
    },
    increaseMistake: function() {
      this.gameState.mistakes++;
    },
    //option
    restart: function() {
      //country
      this.words.country = "clutter";
      this.words.clutteredCountry = "clutter";
      this.words.totalWords = [];
      //user
      this.gameState.score = 0;
      this.gameState.mistake = 0;
      this.words.totalWords = [];
      this.words.totalCorrectWords = [];
      this.words.totalIncorrectWords = [];
      //state
      this.gameState.started = false;
      this.gameState.finished = false;
      this.gameState.timer = this.rules.maxTime;
      clearInterval(this.gameState.timerObject);
    },
    skipAnswer: function() {
      this.words.totalIncorrectWords.push(this.words.country);
      this.fetchRandomCountry();
    },
    giveHint: function() {
      if (this.gameState.hint == false) {
        if (this.gameState.hintsLeft == 0) {
          return;
        } else {
          this.gameState.hintsLeft--;
        }
        this.gameState.hint = true;
        this.gameState.hintText = "";
        for (let i = 0; i < this.words.country.length; i++) {
          var char = this.words.country[i].toLowerCase();
          if (
            char == "a" ||
            char == "e" ||
            char == "i" ||
            char == "o" ||
            char == "u"
          ) {
            this.gameState.hintText += "*";
          } else {
            this.gameState.hintText += char;
          }
        }
        setTimeout(this.giveHint, this.rules.maxHintTime);
      } else {
        this.gameState.hint = false;
      }
    },
    //other
    fetchScreenSize: function() {
      this.screenSize = { width: screen.width, height: screen.height };
    }
  },
  mounted: function() {
    this.startCountdown();
  },
  beforeMount: function() {
    this.fetchScreenSize();
  },
  beforeDestroy: function() {
    this.restart();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* scoreboard */
#scoreboard {
  margin-top: 5vh;
  padding: 1vh 1vw;
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

#countdown {
  font-weight: bold;
  font-size: 15em;
  text-align: center;
  margin-top: 20vh;
}

/* options */
#buttons {
  margin-top: 3vh;
  padding: 1vh 1vw;
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
}
</style>
