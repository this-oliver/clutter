/* jshint esversion: 2015 */
var axios = require("axios")

var countryUrl = "https://restcountries.eu/rest/v2/all";
var regionBaseUrl = "https://restcountries.eu/rest/v2/region/";

/**
 * @returns list of all countries
 */
const fetchAllCountries = function () {
  return axios.get(countryUrl).then(function (response) {
    return response.data;
  });
}

/**
 * @returns list of all eurpean countries
 */
const fetchEuropeanCountries = function () {
  return axios.get(regionBaseUrl + "europe").then(function (response) {
    return response.data;
  });
}

/**
 * @returns list of all african countries
 */
const fetchAfricanCountries = function () {
  return axios.get(regionBaseUrl + "africa").then(function (response) {
    return response.data;
  });
}

/**
 * @returns list of all asian countries
 */
const fetchAsianCountries = function () {
  return axios.get(regionBaseUrl + "asia").then(function (response) {
    return response.data;
  });
}

/**
 * @returns list of all americas countries
 */
const fetchAmericasCountries = function () {
  return axios.get(regionBaseUrl + "americas").then(function (response) {
    return response.data;
  });
}

/**
 * @returns list of all oceania countries
 */
const fetchOceaniaCountries = function () {
  return axios.get(regionBaseUrl + "oceania").then(function (response) {
    return response.data;
  });
}

/**
 * 
 * @param {String} region Region of world. If empty, the method returns all countries
 */
const fetchCountries = function (region) {
  switch (region) {
    case "africa":
      return fetchAfricanCountries();
    case "americas":
      return fetchAmericasCountries();
    case "asia":
      return fetchAsianCountries();
    case "europe":
      return fetchEuropeanCountries();
    case "oceania":
      return fetchOceaniaCountries();
    default:
      return fetchAllCountries();
  }
}

export default {
  fetchCountries
};
