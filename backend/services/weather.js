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

  const monthWeather = [];

  // need to figure out how many days in month...
  for (let i = 1; i <= 31; i++) {
    const dayWeather = await getWeatherForDay(i, month, latitude, longitude);
    monthWeather.push(dayWeather);
  }

  return monthWeather;
}

async function getWeatherForDay(day, month, latitude, longitude) {
  const date = new Date(`${day} ${month} 2018 00:00:00 GMT-0800`);
  const timestamp = Math.round(date.getTime() / 1000);

  const url = `${API_BASE_URL}/${API_SECRET}/${latitude},${longitude},${timestamp}?exclude=currently,hourly,flags`;
  const response = await fetch(url, FETCH_OPTIONS);
  return response.json();
}

module.exports = {
  getWeather,
  getWeatherForMonth
};
