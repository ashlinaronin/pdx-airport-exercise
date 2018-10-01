import React from "react";
import PropTypes from "prop-types";
import { weatherType } from "../types";
import { THRESHOLD_HEATING, THRESHOLD_AC } from "../constants";
import WeatherReportListItem from "./WeatherReportListItem";
import "./WeatherReportList.css";

const WeatherReportList = ({ weatherDataArray }) => {
  return (
    <ul className="weather-report-list">
      {weatherDataArray.map((weatherData, index) => {
        const dailyData = weatherData.daily.data[0];

        return (
          <WeatherReportListItem
            acTurnedOn={dailyData.temperatureMax > THRESHOLD_AC}
            heatingTurnedOn={dailyData.temperatureMin < THRESHOLD_HEATING}
            minDailyTemp={dailyData.temperatureMin}
            maxDailyTemp={dailyData.temperatureMax}
            date={index + 1}
            key={weatherData.daily.data[0].time}
          />
        );
      })}
    </ul>
  );
};

WeatherReportList.propTypes = {
  weatherDataArray: PropTypes.arrayOf(weatherType)
};

export default WeatherReportList;
