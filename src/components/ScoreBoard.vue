<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col>
          <b-modal
            ref="scoreboard"
            title="Scoreboard"
            :size="this.getScreenSize"
            :header-bg-variant="headerBgVariant"
            :header-text-variant="headerTextVariant"
            :body-bg-variant="bodyBgVariant"
            :body-text-variant="bodyTextVariant"
            :footer-bg-variant="footerBgVariant"
            :footer-text-variant="footerTextVariant"
            :visible="gameFinished"
          >
            <b-media-body>
              <b-container fluid>
                <b-row>
                  <b-col cols="3" id="totalCorrectWords">
                    Total
                    <hr />
                    {{totalScore}}/{{totalWords}}
                  </b-col>
                  <b-col cols="3" id="totalWords">
                    Accuracy
                    <hr />
                    {{getUserAccuracy}}%
                  </b-col>
                  <b-col cols="6" id="totalIncorrectWords">
                    Missed words
                    <hr />
                    <ol>
                      <li v-for="word in totalIncorrectWords" :key="word">{{word}}</li>
                    </ol>
                  </b-col>
                </b-row>
              </b-container>
            </b-media-body>
            <template v-slot:modal-footer="{ ok, cancel, hide }">
              <b-button variant="warning" @click="cancel()">Cancel</b-button>
              <b-button variant="success" @click="postHighscore=true">Post Score</b-button>
            </template>
          </b-modal>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-modal
            ref="postHighScore"
            title="Post Highscore"
            :header-bg-variant="headerBgVariant"
            :header-text-variant="headerTextVariant"
            :visible="postHighscore"
          >
            <b-form-group
              description="This is the username that will be shown near your highscore. (ps: it'd be cool if you used your ig tag 🤠)"
            >
              <b-form-input v-model="username" placeholder="Enter your username"></b-form-input>
            </b-form-group>
            <template v-slot:modal-footer="{ ok, cancel }">
              <b-button variant="warning" @click="cancel()">Cancel</b-button>
              <b-button variant="success" @click="uploadHighscore">Post Score</b-button>
            </template>
          </b-modal>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import UserController from "./../controllers/Users";
export default {
  name: "scoreboard",
  data: function() {
    return {
      //highscore
      highscores: [],
      postHighscore: false,
      username: "",
      //styling
      headerBgVariant: "dark",
      headerTextVariant: "light",
      bodyBgVariant: "dark",
      bodyTextVariant: "light",
      footerBgVariant: "dark",
      footerTextVariant: "light",
      screenSize: { width: screen.width, height: screen.height }
    };
  },
  props: [
    "totalScore",
    "totalWords",
    "totalCorrectWords",
    "totalIncorrectWords",
    "gameFinished"
  ],
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
      return res.slice(0, 5);
    },
    getUserAccuracy: function() {
      return Math.ceil((this.totalScore / this.totalWords) * 100);
    },
    getScreenSize: function() {
      var size = this.screenSize.width;
      var res = "";
      if (size <= 350) {
        res = "sm";
      } else if (350 < size && size <= 450) {
        res = "md";
      } else {
        res = "lg";
      }
      return res;
    }
  },
  methods: {
    fetchHighScores: function() {
      var parent = this;
      UserController.fetchHighScores().then(function(players) {
        parent.highscores = players;
      });
    },
    uploadHighscore: function() {
      var component = this;
      var now = new Date();
      UserController.postHighScore(
        this.username,
        this.totalScore,
        this.getUserAccuracy,
        now
      );
      this.$router.push("highscore");
    },
    //other
    fetchScreenSize: function() {
      this.screenSize = { width: screen.width, height: screen.height };
    }
  },
  beforeMount: function() {
    this.fetchScreenSize();
    this.fetchHighScores();
  }
};
</script>

<style scoped>
#totalCorrectWords {
  background-color: #0bb302;
}
#totalWords {
  background-color: #7a91ff;
}
#totalIncorrectWords {
  background-color: #ffef40;
  color: black;
}

#highscores {
  background-color: #b26fda;
  color: black;
}
</style>