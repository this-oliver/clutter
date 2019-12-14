<template>
  <div>
    <b-container fluid>
      <!-- timer -->
      <b-row class="justify-content-md-center" id="timer">
        <b-col>
          <p>{{timer}}</p>
        </b-col>
      </b-row>
      <!-- word -->
      <b-row id="word">
        <b-col>{{clutteredCountry}}</b-col>
      </b-row>
      <!-- buttons -->
      <b-row class="justify-content-md-center" id="buttons">
        <b-col>
          <b-button-toolbar>
            <b-button-group>
              <b-button @click="startTimer">Start</b-button>
              <b-button @click="hint">Hint</b-button>
              <b-button @click="restart">Restart</b-button>
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
      country: "clutter",
      clutteredCountry: "clutter",
      hint: false,
      timer: "60 seconds"
    };
  },
  computed: {
    fetchTimer: function() {
      var timer = TimerTool.getCurrentTime();
      this.timer =
        timer.getHours + ":" + timer.getMinutes + ":" + timer.getSeconds;
    }
  },
  methods: {
    fetchRandomCountry: function() {
      var component = this;
      CountryController.fetchCountries().then(function(list) {
        var country = list[ClutterTool.randomNumber(0, list.length)].name;
        var clutteredCountry = ClutterTool.clutter(country);
        component.country = country;
        component.clutteredCountry = clutteredCountry;
      });
    }
  },
  mounted: function() {}
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
