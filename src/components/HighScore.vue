<template>
  <b-container fluid>
    <b-row id="title">
      <b-col>Highscores</b-col>
    </b-row>
    <b-row id="highscores">
      <b-col>
        <b-table
          id="highscores"
          :items="highscores"
          :fields="highscoreFields"
          striped
          sticky-header="500px"
          head-variant="dark"
          table-variant="light"
          show-empty
        >
          <template v-slot:cell(username)="data">
            <b>@{{data.value}}</b>
          </template>
          <template v-slot:cell(score)="data">
            {{data.value}}
            <b>pts</b>
          </template>
          <template v-slot:cell(accuracy)="data">
            {{data.value}}
            <b>%</b>
          </template>
          <template v-slot:cell(created)="data">
            {{data.value}}
            <b>hrs</b>
          </template>
        </b-table>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import UserController from "./../controllers/Users";
export default {
  name: "highscore",
  data: function() {
    return {
      highscores: [],
      highscoreFields: [
        { key: "username", label: "🌍", sortable: true },
        { key: "score", label: "🎖", sortable: true },
        { key: "accuracy", label: "🎯", sortable: true },
        { key: "created", label: "⏳", sortable: true }
      ]
    };
  },
  methods: {
    fetchHighScores: function() {
      var component = this;
      UserController.fetchHighScores().then(function(players) {
        component.highscores = component.sortHighscore(players);
      });
    },
    sortHighscore: function(list) {
      var res = [];
      list.forEach(player => {
        var item = {
          username: player.username,
          score: player.score,
          accuracy: player.accuracy,
          created: this.readISO(player.created)
        };
        res.push(item);
      });
      res.sort(function(a, b) {
        return b.score - a.score;
      });
      return res;
    },
    readISO: function(iso) {
      var then = new Date(iso).getTime();
      var now = new Date().getTime();
      var diff = Math.abs(now - then) / (60 * 60 * 1000);
      return Math.ceil(diff);
    }
  },
  beforeMount: function() {
    this.fetchHighScores();
  },
  mounted: function() {
    this.fetchHighScores();
  }
};
</script>

<style scoped>
#title {
  font-size: 2.5em;
  font-weight: bold;

  margin: 1vh 1vw 0vh 1vw;
  padding: 1vh 1vw;
}

#highscores {
  margin-bottom: 5vh;
}
</style>