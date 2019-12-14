<template>
  <div>
    <b-container fluid>
      <!-- timer -->
      <b-row class="justify-content-md-center">
        <b-col>
          <p>{{timer}}</p>
        </b-col>
      </b-row>
      <!-- word -->
      <b-row></b-row>
      <!-- buttons -->
      <b-row></b-row>
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
      hint: false,
      timer: ""
    };
  },
  methods: {
    fetchRandomCountry: function() {
      var component = this;
      CountryTool.fetchCountries().then(function(list) {
        var country = list[ClutterTool.randomNumber(0, list.length)].name;
        var clutteredCountry = ClutterTool.clutter(country);
        component.country = country;
        component.clutteredCountry = clutteredCountry;
      });
    }
  },
  mounted: function() {
    this.fetchRandomCountry();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
