/* jshint esversion: 2015 */
var axios = require("axios");
var highscoreUrl =
  process.env.NODE_ENV == "production"
    ? "http://clutter-api.herokuapp.com/highscores"
    : "http://localhost:8081/highscores";

/**
 * @returns list of all highscores
 */
const fetchHighScores = function() {
  console.log({ url: highscoreUrl });
  return axios.get(highscoreUrl).then(function(response) {
    console.log({ res: response.data });
    return response.data;
  });
};

const postHighScore = function(username, score, accuracy, date) {
  var player = {
    username: username,
    score: score,
    accuracy: accuracy,
    created: date
  };

  axios
    .post(highscoreUrl, player)
    .then(function(response) {
      console.log("posted!");
      console.log({ res: response });
      return response;
    })
    .catch(function(error) {
      console.log({ error: error });
    });
};

export default {
  fetchHighScores,
  postHighScore
};
