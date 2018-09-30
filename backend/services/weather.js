const fetch = require("isomorphic-fetch");
const API_BASE_URL = "//api.darksky.net/forecast";
const API_SECRET = "dd9b259a5201c1f828bdb05bd0c80321";

async function getWeather(latitude, longitude) {
  const url = `${API_BASE_URL}/${API_SECRET}/${latitude},${longitude}`;
  const response = await fetch(url);
  return await response.json();
}

module.exports = {
  getWeather
};
