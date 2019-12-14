/* jshint esversion: 2015 */

/**
 * 
 * @param {String} text text that will be cluttered
 * @returns {String} cluttered text
 */
const clutter = function (text) {
  var result = "";
  var words = text.split(" ");

  words.forEach((word, index) => {
    var string = "";
    var clutteredText = "";

    if (word[0] == "(" && word[word.length - 1] == ")") {
      string = word.slice(1, word.length - 1);
      clutteredText += "(" + scramble(string) + ")";
    } else if (word[0] == "(") {
      string = word.slice(1, word.length);
      clutteredText += "(" + scramble(string);
    } else if (word[word.length - 1] == ")") {
      string = word.slice(0, word.length - 1);
      clutteredText += scramble(string) + ")";
    } else {
      string = scramble(word);
      clutteredText += string;
    }

    if (index == words.length - 1) {
      result += clutteredText;
    } else {
      result += clutteredText + " ";
    }
  });
  return result;
};

/**
 * 
 * @param {String} text 
 * @returns {String} shuffles string
 */
const scramble = function (string) {
  if (typeof string !== "string") {
    console.log(typeof string);
    return null;
  }

  var length = string.length;
  var letters = string.split("");
  var res = new Array(length);

  letters.forEach(letter => {
    var randomNum;
    var spotFilled = false;
    do {
      randomNum = randomNumber(0, length);
      if (res[randomNum] === undefined) {
        res[randomNum] = letter;
        spotFilled = true;
      }
    } while (spotFilled == false);
  });
  return res.join("");
}

/**
 * 
 * @param {Number} from 
 * @param {Number} to 
 * @returns {Array} random number from the range given
 */
const randomNumber = function (from, to) {
  return (Math.round(Math.random() * to) + from);
}

export default {
  clutter,
  randomNumber
};
