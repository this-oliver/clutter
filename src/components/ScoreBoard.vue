<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col>
          <b-modal
            id="scoreboard"
            size="lg"
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
                  <b-col cols="4" id="totalCorrectWords">
                    Total Correct Words Guessed
                    <hr />
                    {{totalScore}}
                  </b-col>
                  <b-col cols="4" id="totalWords">
                    Stats
                    <hr />
                    {{totalScore}}/{{totalWords}}
                  </b-col>
                  <b-col cols="4" id="totalIncorrectWords">
                    Words that you got wrong
                    <hr />
                    <ol>
                      <li v-for="word in totalIncorrectWords" :key="word">{{word}}</li>
                    </ol>
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
export default {
  data: function() {
    return {
      //styling
      headerBgVariant: "dark",
      headerTextVariant: "light",
      bodyBgVariant: "dark",
      bodyTextVariant: "light",
      footerBgVariant: "dark",
      footerTextVariant: "light"
    };
  },
  props: [
    "totalScore",
    "totalWords",
    "totalCorrectWords",
    "totalIncorrectWords",
    "gameFinished"
  ]
};
</script>

<style>
</style>