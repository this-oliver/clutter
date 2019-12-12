<template>
  <div>
    <b-container>
      <b-row align-h="center">
        <b-col>
          <span>timer</span>
        </b-col>
      </b-row>
      <b-row align-h="center">
        <b-col>
          <p>{{country}}</p>
          <b-button @click="fetchRandomCountry">clutter</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import CountryTool from "./../controllers/country";
export default {
  name: "Canvas",
  data: function() {
    return {
      country: ""
    };
  },
  methods: {
    fetchRandomCountry: function() {
      var component = this;
      CountryTool.fetchCountries().then(function(list) {
        console.log({ name: list[0].name });
        component.country = list[0].name;
      });
    }
  },
  mounted: function() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
