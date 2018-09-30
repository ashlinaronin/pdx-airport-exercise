const fetch = require("isomorphic-fetch");
const moment = require("moment");
const API_BASE_URL = "//api.darksky.net/forecast";
const API_SECRET = "dd9b259a5201c1f828bdb05bd0c80321";
const FETCH_OPTIONS = { headers: { "Accept-Encoding": "gzip" } };

async function getWeather(latitude, longitude) {
  const url = `${API_BASE_URL}/${API_SECRET}/${latitude},${longitude}`;
  const response = await fetch(url, FETCH_OPTIONS);
  return response.json();
}

async function getWeatherForMonth(month, latitude, longitude) {
  const monthWeather = [];
  const daysInMonth = getDaysInMonth(month);

  // TODO: use Promise.all/map for parallel
  for (let i = 1; i <= daysInMonth; i++) {
    const dayWeather = await getWeatherForDay(i, month, latitude, longitude);
    monthWeather.push(dayWeather);
  }

  return monthWeather;
}

async function getWeatherForDay(day, month, latitude, longitude) {
  // Generate a UNIX timestamp for the given month and day so DarkSky can understand it
  const timestamp = moment(`${month} ${day} 2018`, "MMMM D 2018").unix();
  const url = `${API_BASE_URL}/${API_SECRET}/${latitude},${longitude},${timestamp}?exclude=currently,hourly,flags`;
  const response = await fetch(url, FETCH_OPTIONS);
  return response.json();
}

function getDaysInMonth(month) {
  return moment(`2018 ${month}`, "YYYY MMMM").daysInMonth();
}

module.exports = {
  getWeather,
  getWeatherForMonth
};
