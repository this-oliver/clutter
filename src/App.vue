<template>
  <div id="app">
    <b-container fluid id="content">
      <b-row>
        <b-col>
          <b-navbar toggleable="lg" fixed="bottom" type="dark" variant="dark">
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav>
                <b-nav-item to="/" class="navigationItem">🏠 Home</b-nav-item>
                <b-nav-item to="/clutter" class="navigationItem">🎮 Game</b-nav-item>
                <b-nav-item to="/highscores" class="navigationItem">🏆 Highscores</b-nav-item>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </b-col>
      </b-row>
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

.navigationItem {
  font-size: 1.5em;
  border-radius: 25px;

  color: white;
}

@media only screen and (max-width: 600px) {
}
</style>
