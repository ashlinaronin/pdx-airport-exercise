import React from "react";
import PropTypes from "prop-types";
import { weatherType } from "../types";
import { THRESHOLD_HEATING, THRESHOLD_AC } from "../constants";
import "./WeatherReportList.css";

const WeatherReportSummary = ({ weatherDataArray, month }) => {
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
    <div>
      During the month of {month} 2018, the Portland International Airport's AC
      system was turned on at least once a day for {totalAc} days. Its heating
      system was turned on at least once a day for {totalHeat} days.
    </div>
  );
};

WeatherReportSummary.propTypes = {
  weatherDataArray: PropTypes.arrayOf(weatherType),
  month: PropTypes.string.isRequired
};

export default WeatherReportSummary;
