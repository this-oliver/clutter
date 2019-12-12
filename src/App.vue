<template>
  <div id="app">
    <b-container fluid>
      <!-- content -->
      <b-row>
        <b-col>
          <router-view />
        </b-col>
      </b-row>

      <!-- navigation bar -->
      <b-row id="navigation">
        <b-col cols="2" class="nav-item">
          <p>Gissa</p>
        </b-col>
      </b-row>
    </b-container>
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#navigation {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #333;
}

#navigation .nav-item {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
</style>
