/* jshint esversion: 2015 */
const scrambleWord = function (word) {
  if (typeof word !== "string") {
    console.log(typeof word);
    return null;
  }

  var length = word.length;
  var temp = word.split("");
  var res = new Array(length);

  console.log({
    word: word,
    length: length,
    temp_word: temp,
    res_array: res
  })

  temp.forEach(letter => {
    var randomNum;
    var spotFilled = false;
    do {
      randomNum = randomNumber(0, length);
      if (res[randomNum] === undefined) {
        res[randomNum] = letter;
        spotFilled = true;
      }
    } while (spotFilled == false);

    console.log({
      character: letter,
      randomNum: randomNum
    })
  });

  return res.join('').toLowerCase();
}

const randomNumber = function (from, to) {
  return (Math.round(Math.random() * to) + from);
}

console.log(scrambleWord("oliver"));

// export default {
//   scrambleWord
// };
