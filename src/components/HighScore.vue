<template>
  <b-container fluid>
    <b-row>
      <b-col id="highscores">
        <b-table :items="getHighScores"></b-table>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import UserController from "./../controllers/Users";
export default {
  name: "highscore",
  data: {
    highscores: []
  },
  computed: {
    getHighScores: function() {
      var res = [];
      this.highscores.forEach(player => {
        var item = {
          username: player.username,
          score: player.score,
          accuracy: player.accuracy
        };
        res.push(item);
      });
      res.sort(function(a, b) {
        return b.score - a.score;
      });
    }
  },
  methods: {
    fetchHighScores: function() {
      var parent = this;
      UserController.fetchHighScores().then(function(players) {
        parent.highscores = players;
      });
    }
  },
  beforeMount: function() {
    this.fetchHighScores();
  }
};
</script>

<style scoped>
</style>