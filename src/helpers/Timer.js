/* jshint esversion: 2015 */

const getCurrentTime = function () {
  return new Date();
}

/**
 * 
 * @param {Date} deadline 
 * @returns {Date} time left 
 */
const countDown = function (now, deadline) {
  //find diff between countdown time and now
  var diff = new Date(deadline - now);
  //return diff
  return diff;
}

export default {
  getCurrentTime,
  countDown
};
