<template>
  <b-container fluid>
    <b-row id="title" align-v="center">
      <b-col>Clutter</b-col>
    </b-row>
    <b-row id="button-groups">
      <b-col>
        <b-button-group>
          <b-button to="/clutter" variant="dark">Start Game</b-button>
        </b-button-group>
      </b-col>
    </b-row>
    <b-row id="howto" align-v="center">
      <b-col>
        📓 How to play:
        <ol>
          <li>
            <p>Guess which country the cluttered™ word represents</p>
          </li>
          <li>
            <p>60 Seconds to answer anagrams</p>
          </li>
          <li>
            <p>Correct guess is 1+ point</p>
          </li>
        </ol>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {};
</script>

<style scoped>
#title {
  font-size: 10em;
  font-weight: bold;

  margin: 5vh 1vw 0 1vw;
}

#button-groups {
  margin: 10vh 1vw 0 1vw;
}

#howto {
  font-size: 2em;
  font-weight: 800;
  color: white;

  border: 5px solid grey;
  border-radius: 10px;
  margin: 5vh 1vw 0 1vw;
  padding: 1vh 1vw;
}

#howto p {
  color: black;
}

#howto li {
  font-weight: 500;
}

@media only screen and (max-width: 350px) {
  #title {
    font-size: 5em;
  }

  #howto {
    font-size: 1em;
  }
}

@media only screen and (max-width: 600px) {
  #title {
    font-size: 5em;
  }

  #howto {
    font-size: 1em;
  }
}

@media only screen and (max-width: 750px) {
  #title {
    font-size: 5em;
  }
}
</style>