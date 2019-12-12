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
          <span>{{countries[0]}}</span>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import CountryTool from "./../controllers/country";
export default {
  name: "Canvas",
  data() {
    return {
      countries: CountryTool.fetchCountries()
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
