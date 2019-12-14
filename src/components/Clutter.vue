<template>
  <div>
    <b-container fluid>
      <!-- timer -->
      <b-row class="justify-content-md-center" id="timer">
        <b-col>
          <p v-if="this.gameStarted == true">{{showTime}}</p>
          <p v-else>60 seconds</p>
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
              <b-col>{{country}}</b-col>
            </b-col>
          </b-row>
          <b-row id="input" v-if="gameStarted">
            <b-col>
              <b-input-group>
                <b-input-group-text>Your Guess</b-input-group-text>
                <b-form-input size="lg" v-bind="this.userInput"></b-form-input>
                <b-input-group-append>
                  <b-button size="lg" text="Button" variant="success" @click="checkAnswer">Guess</b-button>
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
              <b-button variant="primary" :disabled="gameStarted" @click="startGame">Start</b-button>
              <b-button variant="warning" v-if="gameStarted" @click="showHint">Hint</b-button>
              <b-button variant="danger" v-if="gameStarted" @click="restart">Restart</b-button>
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
import TimerTool from "./../helpers/Timer";
export default {
  name: "Canvas",
  data: function() {
    return {
      //word related
      country: "clutter",
      clutteredCountry: "clutter",
      userInput: "",
      //game related
      gameStarted: false,
      hint: false,
      timeLeft: new Date(),
      timeStarted: new Date(),
      timer: new Date()
    };
  },
  computed: {
    showTime: function() {
      return this.timer.getMinutes() + ":" + this.timer.getSeconds();
    }
  },
  methods: {
    startGame: function() {
      this.gameStarted = true;
      this.fetchRandomCountry();
      this.timeStarted = TimerTool.getCurrentTime();
      this.timeLeft = new Date(
        this.timeStarted.setSeconds(this.timeStarted.getSeconds() + 10)
      );

      var component = this;
      var timerObject = setInterval(function() {
        component.timer = TimerTool.countDown(
          TimerTool.getCurrentTime(),
          component.timeLeft
        );
        if (component.timeLeft - TimerTool.getCurrentTime < 0) {
          component.gameStarted = false;
          clearInterval(timerObject);
          alert("ran out of time LOSER");
        }
      }, 1000);
    },
    restart: function() {
      this.country = "clutter";
      this.clutteredCountry = "clutter";
      this.gameStarted = false;
    },
    checkAnswer: function() {
      if (this.userInput.toLowerCase == this.country.toLowerCase) {
        alert("yay");
      } else {
        alert("sorry try again... Loser");
      }
    },
    showHint: function() {
      if (this.hint == false) {
        this.hint = true;
        setTimeout(this.showHint, 500);
      } else {
        this.hint = false;
      }
    },
    fetchRandomCountry: function() {
      var component = this;
      CountryController.fetchCountries().then(function(list) {
        var country = list[ClutterTool.randomNumber(0, list.length)].name;
        var clutteredCountry = ClutterTool.clutter(country);
        component.country = country;
        component.clutteredCountry = clutteredCountry;
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#timer {
  height: 20vh;
  padding: 5vh 5vw;

  text-align: center;
  font-size: 5em;
  font-weight: bold;
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
