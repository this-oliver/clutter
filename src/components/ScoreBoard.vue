<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col>
          <b-modal
            id="scoreboard"
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
                <b-row>
                  <b-col id="highscores">
                    <b-table :items="highscores"></b-table>
                  </b-col>
                </b-row>
              </b-container>
            </b-media-body>
          </b-modal>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import UserController from "./../controllers/Users";
export default {
  data: function() {
    return {
      //highscore
      highscores: [],
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
      UserController.fetchHighScores().then(function(players) {
        this.highscores = players;
      });
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

<style>
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