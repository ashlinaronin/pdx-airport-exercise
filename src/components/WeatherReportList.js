import React from "react";
import PropTypes from "prop-types";
import WeatherReportListItem from "./WeatherReportListItem";
import { weatherType } from "../types";
import "./WeatherReportList.css";

const WeatherReportList = ({ weatherDataArray }) => {
  return (
    <ul className="weather-report-list">
      {weatherDataArray.map((weatherData, index) => (
        <WeatherReportListItem
          weatherData={weatherData}
          date={index + 1}
          key={weatherData.daily.data[0].time}
        />
      ))}
    </ul>
  );
};

WeatherReportList.propTypes = {
  weatherDataArray: PropTypes.arrayOf(weatherType)
};

export default WeatherReportList;
