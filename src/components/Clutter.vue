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
          <span>{{fetchRandomCountry}}</span>
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
      countries: CountryTool.fetchCountries()
    };
  },
  computed: {
    fetchRandomCountry: function() {
      CountryTool.fetchCountries().then(function(list) {
        console.log({ list: list.data });
        return list[0];
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
