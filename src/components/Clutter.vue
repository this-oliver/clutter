<template>
  <div>
    <b-container fluid>
      <!-- timer -->
      <b-row class="justify-content-md-center" id="scoreboard">
        <b-col v-if="gameStarted" cols="4" id="score">
          <p>Score[ {{score}} ]</p>
        </b-col>
        <b-col cols="8" id="timer">
          <p v-if="this.gameStarted == true">{{showTime}}</p>
          <p v-else>Countdown</p>
        </b-col>
      </b-row>
      <!-- word -->
      <b-row id="word">
        <b-col>
          <b-row id="clutteredWord">
            <b-col>{{clutteredCountry}}</b-col>
          </b-row>
          <b-row id="hint" v-if="hint">
            <b-col>
              <b-col>{{hintText}}</b-col>
            </b-col>
          </b-row>
          <b-row id="input" v-if="gameStarted">
            <b-col>
              <b-input-group>
                <b-form-input size="lg" v-model="userInput"></b-form-input>
                <b-input-group-append>
                  <b-button
                    size="lg"
                    text="Button"
                    variant="success"
                    @click="checkAnswer"
                  >Take a Guess</b-button>
                </b-input-group-append>
              </b-input-group>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <!-- buttons -->
      <b-row class="justify-content-md-center" id="buttons">
        <b-col>
          <b-button-toolbar>
            <b-button-group>
              <b-button variant="primary" :disabled="gameStarted" @click="startGame" size="lg">Start</b-button>
              <b-button variant="warning" v-if="gameStarted" @click="giveHint" size="lg">Hint</b-button>
              <b-button variant="danger" v-if="gameStarted" @click="restart" size="lg">Restart</b-button>
            </b-button-group>
          </b-button-toolbar>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import CountryController from "./../controllers/Country";
import ClutterTool from "./../helpers/Clutter";
export default {
  name: "Canvas",
  data: function() {
    return {
      //word related
      country: "clutter",
      clutteredCountry: "clutter",
      //game state
      gameStarted: false,
      gameFinished: false,
      userInput: "",
      mistakes: 0,
      hint: false,
      hintText: "",
      timerObject: null,
      //game rules
      score: 0,
      timer: 60,
      gameTime: 60,
      maxMistakes: 0
    };
  },
  computed: {
    showTime: function() {
      return this.timer + " secs";
    }
  },
  methods: {
    startGame: function() {
      this.gameStarted = true;
      this.fetchRandomCountry();
      this.startTimer();
    },
    restart: function() {
      this.country = "clutter";
      this.clutteredCountry = "clutter";
      this.gameStarted = false;
      this.gameFinished = false;
      this.timer = this.gameTime;
      clearInterval(this.timerObject);
      this.score = 0;
    },
    checkAnswer: function() {
      if (
        this.userInput.toLowerCase().toString() ==
        this.country.toLowerCase().toString()
      ) {
        this.score++;
        this.userInput = "";
        this.fetchRandomCountry();
      } else {
        this.score--;
        this.mistakes++;
        this.userInput = "";

        if (mistakes == maxMistakes) {
          this.mistakes = 0;
          this.fetchRandomCountry();
        }
      }
    },
    giveHint: function() {
      if (this.hint == false) {
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
    startTimer: function() {
      var component = this;
      this.timerObject = setInterval(function() {
        component.timer--;
        if (component.timer < 0) {
          clearInterval(timerObject);
        }
      }, 1000);
    },
    fetchRandomCountry: function() {
      var component = this;
      CountryController.fetchCountries().then(function(list) {
        var country = list[ClutterTool.randomNumber(0, list.length)].name;
        var clutteredCountry = ClutterTool.clutter(country);
        component.country = new String(country);
        component.clutteredCountry = clutteredCountry;
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#scoreboard {
  height: 20vh;
  padding: 5vh 5vw;
}

#timer {
  text-align: center;
  font-size: 4em;
  font-weight: bold;
}

#score {
  color: yellow;
  text-align: left;
  font-weight: 700;
  font-size: 2em;
}

#word {
  height: 50vh;
  padding: 5vh 5vw;

  text-align: center;
  font-size: 5em;
}
#buttons {
  height: 20vh;
  padding: 5vh 5vw;

  text-align: center;
}
</style>
