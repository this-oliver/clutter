<template>
  <div id="app">
    <b-container fluid>
      <!-- content -->
      <b-row>
        <b-col>
          <router-view id="content" />
        </b-col>
      </b-row>
    </b-container>
    <!-- navigation bar -->
    <nav id="navigation">
      <ul></ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #60a358;
}

#content {
  height: 90vh;
  width: 100vw;
}

#navigation {
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 10vh;
  color: white;
  background-color: rgb(0, 0, 0);
}

#navigation li {
  list-style-type: none;
  margin: 0 2vw;
  float: left;
}
</style>
