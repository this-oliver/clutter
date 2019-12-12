<template>
  <div id="app">
    <b-container>
      <!-- content -->
      <b-row>
        <b-col>
          <router-view />
        </b-col>
      </b-row>

      <!-- navigation bar -->
      <b-row>
        <b-col>
          <nav id="navigation">
            <ul>
              <li>clutter</li>
            </ul>
          </nav>
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

#content {
  height: 90vh;
  width: 100vw;
}

#navigation {
  position: fixed;
  bottom: 0;
  width: 100vw;
  color: white;
  background-color: #333;

  display: flex;
}

#navigation li {
  list-style-type: none;
  margin: 0 2vw;
}
</style>
