<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <span>timer</span>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <b-button variant="success" @click="fetchRandomCountry">clutter</b-button>
          <span>{{clutteredCountry}}</span>
        </b-col>
        <b-col cols="12">
          <span>
            <b-button @click="hint=!hint">hint</b-button>
            <p v-if="hint == true">{{country}}</p>
          </span>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import CountryTool from "./../controllers/Country";
import ClutterTool from "./../helpers/Clutter";
export default {
  name: "Canvas",
  data: function() {
    return {
      country: "",
      clutteredCountry: "",
      hint: false
    };
  },
  methods: {
    fetchRandomCountry: function() {
      var component = this;
      CountryTool.fetchCountries().then(function(list) {
        var country = list[ClutterTool.randomNumber(0, list.length)].name;
        var clutteredCountry = ClutterTool.clutterWord(country);
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
</style>
