/* jshint esversion: 2015 */
const clutterWord = function (word) {
  if (typeof word !== "string") {
    console.log(typeof word);
    return null;
  }

  var length = word.length;
  var letters = word.split("");
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
  return res.join('').toLowerCase();
}

const randomNumber = function (from, to) {
  return (Math.round(Math.random() * to) + from);
}

export default {
  clutterWord,
  randomNumber
};
