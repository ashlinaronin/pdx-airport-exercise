import React from "react";
import {weatherType} from "../types";

const WeatherReportListItem = ({ weatherData }) => {
  return (
    <li>
      {JSON.stringify(weatherData)}
    </li>
  );
};

WeatherReportListItem.propTypes = {
  weatherData: weatherType
};

export default WeatherReportListItem;
