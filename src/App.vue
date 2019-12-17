<template>
  <div id="app">
    <b-container fluid id="content">
      <!-- content -->
      <b-row>
        <b-col>
          <router-view />
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
  background: #60a358;
}

#content {
  height: 100vh;
  width: 100vw;
}

@media only screen and (max-width: 600px) {
}
</style>
