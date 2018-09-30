const fetch = require("isomorphic-fetch");
const API_BASE_URL = "//api.darksky.net/forecast";
const API_SECRET = "dd9b259a5201c1f828bdb05bd0c80321";
const FETCH_OPTIONS = { headers: { "Accept-Encoding": "gzip" } };

async function getWeather(latitude, longitude) {
  const url = `${API_BASE_URL}/${API_SECRET}/${latitude},${longitude}`;
  const response = await fetch(url, FETCH_OPTIONS);
  return response.json();
}

async function getWeatherForMonth(month, latitude, longitude) {
  // Convert given month into a Unix timestamp in PST
  const date = new Date(`1 ${month} 2018 00:00:00 GMT-0800`);
  const timestamp = Math.round(date.getTime() / 1000);

  const url = `${API_BASE_URL}/${API_SECRET}/${latitude},${longitude},${timestamp}?exclude=currently,hourly,flags`;
  const response = await fetch(url, FETCH_OPTIONS);
  return response.json();
}

module.exports = {
  getWeather,
  getWeatherForMonth
};
