const fetch = require("isomorphic-fetch");
const moment = require("moment");

// In a production application, we would want to obscure the API secret in an env variable
const API_BASE_URL = "//api.darksky.net/forecast";
const API_SECRET = "373c7a70334a7e62ff1e1226a20cff4f";
const FETCH_OPTIONS = { headers: { "Accept-Encoding": "gzip" } };

async function getWeather(latitude, longitude) {
  const url = `${API_BASE_URL}/${API_SECRET}/${latitude},${longitude}`;
  const response = await fetch(url, FETCH_OPTIONS);
  return response.json();
}

async function getWeatherForMonth(month, year, latitude, longitude) {
  const daysInMonth = getDaysInMonth(month, year);
  const weatherPromises = [];

  for (let i = 1; i <= daysInMonth; i += 1) {
    const dayWeatherPromise = getWeatherForDay(
      i,
      month,
      year,
      latitude,
      longitude
    );
    weatherPromises.push(dayWeatherPromise);
  }

  // Execute external API calls in parallel
  return Promise.all(weatherPromises);
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
