import React from "react";
import PropTypes from "prop-types";
import WeatherReportListItem from './WeatherReportListItem';
import {weatherType} from "../types";

const WeatherReportList = ({ weatherDataArray }) => {
  return (
    <ul>
      {weatherDataArray.map(weatherData => (
        <WeatherReportListItem weatherData={weatherData} key={weatherData.daily.data[0].time} />
      ))}
    </ul>
  );
};

WeatherReportList.propTypes = {
  weatherDataArray: PropTypes.arrayOf(weatherType)
};

export default WeatherReportList;
