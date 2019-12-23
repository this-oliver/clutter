/* jshint esversion: 2015 */
var axios = require("axios");
var highscoreUrl =
  process.env.NODE_ENV == "production"
    ? "https://dashboard.heroku.com/apps/clutter-api/api/highscores/"
    : "http://localhost:8081";

/**
 * @returns list of all countries
 */
const fetchHighScores = function() {
  return axios.get(highscoreUrl).then(function(response) {
    return response.data;
  });
};

export default {
  fetchHighScores
};
