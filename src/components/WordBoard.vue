<template>
  <div>
    <b-row id="word">
      <b-col>
        <div id="output">
          <b-row id="clutter">
            <b-col>{{words.clutteredCountry}}</b-col>
          </b-row>
          <b-row id="hint" v-if="gameState.hint">
            <b-col>
              <b-col>{{gameState.hintText}}</b-col>
            </b-col>
          </b-row>
        </div>
        <div id="input">
          <b-row v-if="gameState.started">
            <b-col>
              <b-form-group>
                <b-input-group>
                  <b-form-input
                    :size="screenSize"
                    :disabled="gameState.finished"
                    v-model="input"
                    v-on:keyup.enter="checkAnswer"
                  ></b-form-input>
                  <b-input-group-append v-if="this.screenSize == 'lg'">
                    <b-button
                      :size="screenSize"
                      text="Button"
                      variant="success"
                      :disabled="gameState.finished"
                      @click="checkAnswer"
                    >Take a Guess</b-button>
                  </b-input-group-append>
                  <b-input-group-append v-if="screenSize == 'lg'">
                    <b-button
                      :size="this.screenSize"
                      text="Button"
                      variant="warning"
                      :disabled="gameState.finished"
                      @click="skipAnswer"
                    >Skip</b-button>
                  </b-input-group-append>
                </b-input-group>
                <b-form-group v-if="screenSize != 'lg'" label-cols-sm="12">
                  <b-button-group>
                    <b-button
                      :size="screenSize"
                      text="Button"
                      variant="success"
                      :disabled="gameState.finished"
                      @click="checkAnswer"
                    >Guess</b-button>
                    <b-button
                      :size="screenSize"
                      text="Button"
                      variant="warning"
                      :disabled="gameState.finished"
                      @click="skipAnswer"
                    >Skip</b-button>
                  </b-button-group>
                </b-form-group>
              </b-form-group>
            </b-col>
          </b-row>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "WordBoard",
  data: function() {
    return {
      input: ""
    };
  },
  props: [
    //words
    "words",
    //gameState
    "gameState",
    //rules
    "rules",
    //other
    "screenSize"
  ],
  methods: {
    checkAnswer: function() {
      if (
        this.input.toLowerCase().toString() ==
        this.words.country.toLowerCase().toString()
      ) {
        this.input = "";
        this.$emit("increaseScore");
      } else {
        this.input = "";
        this.$emit("increaseMistake");
        if (this.gameState.mistakes % this.rules.maxMistakes == 0) {
          this.$emit("skipAnswer");
        }
      }
    },
    skipAnswer: function() {
      this.input = "";
      this.$emit("skipAnswer");
    }
  }
};
</script>

<style>
/* word */
#word {
  padding: 1vh 1vw;

  font-size: 5em;
}

#output {
  margin: 2vh 0vw;
  padding: 1vh 1.5vw;
  border-radius: 25px;
  background-color: rgba(0, 0, 0, 0.247);

  text-size-adjust: auto;
}

@media only screen and (max-width: 600px) {
  #word {
    font-size: 2.5em;
  }
}

@media only screen and (max-width: 350) {
  #word {
    font-size: 1.5em;
  }
}
</style>