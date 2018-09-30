const fetch = require("isomorphic-fetch");
const moment = require("moment");
const API_BASE_URL = "//api.darksky.net/forecast";
const API_SECRET = "14d2b07020fa2e2c2bad761d6bf1779c";
const FETCH_OPTIONS = { headers: { "Accept-Encoding": "gzip" } };

async function getWeather(latitude, longitude) {
  const url = `${API_BASE_URL}/${API_SECRET}/${latitude},${longitude}`;
  const response = await fetch(url, FETCH_OPTIONS);
  return response.json();
}

async function getWeatherForMonth(month, year, latitude, longitude) {
  const monthWeather = [];
  const daysInMonth = getDaysInMonth(month, year);

  // TODO: use Promise.all/map for parallel
  for (let i = 1; i <= daysInMonth; i++) {
    const dayWeather = await getWeatherForDay(
      i,
      month,
      year,
      latitude,
      longitude
    );
    monthWeather.push(dayWeather);
  }

  return monthWeather;
}

async function getWeatherForDay(day, month, year, latitude, longitude) {
  // Generate a UNIX timestamp for the given month and day so DarkSky can understand it
  const timestamp = moment(`${month} ${day} ${year}`, "MMMM D YYYY").unix();
  const url = `${API_BASE_URL}/${API_SECRET}/${latitude},${longitude},${timestamp}?exclude=currently,hourly,flags`;
  const response = await fetch(url, FETCH_OPTIONS);
  return response.json();
}

function getDaysInMonth(month, year) {
  return moment(`${year} ${month}`, "YYYY MMMM").daysInMonth();
}

module.exports = {
  getWeather,
  getWeatherForMonth
};
