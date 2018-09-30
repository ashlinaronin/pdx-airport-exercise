import React from "react";
import PropTypes from "prop-types";
import { weatherType } from "../types";
import { THRESHOLD_HEATING, THRESHOLD_AC } from "../constants";
import ReportKey from "./ReportKey";
import "./WeatherReportSummary.css";

const WeatherReportSummary = ({ weatherDataArray, month, year }) => {
  let totalAc = 0;
  let totalHeat = 0;

  weatherDataArray.forEach(weatherData => {
    const dailyData = weatherData.daily.data[0];
    if (dailyData.temperatureMax > THRESHOLD_AC) {
      totalAc += 1;
    }

    if (dailyData.temperatureMin < THRESHOLD_HEATING) {
      totalHeat += 1;
    }
  });

  return (
    <div className="weather-report-summary">
      <ReportKey />
      <p>
        During {month} {year}, the AC system at Portland International Airport
        was turned on at least once a day for {totalAc} days. The heating system
        was turned on at least once a day for {totalHeat} days.
      </p>
    </div>
  );
};

WeatherReportSummary.propTypes = {
  weatherDataArray: PropTypes.arrayOf(weatherType),
  month: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired
};

export default WeatherReportSummary;
