import React from "react";
import {weatherType} from "../types";

const WeatherReportListItem = ({ weatherData }) => {
  const dailyData = weatherData.daily.data[0];
  const acTurnedOn = dailyData.temperatureMax > 75;
  const heatingTurnedOn = dailyData.temperatureMin < 62;

  return (
    <li>
      AC={acTurnedOn ? 'yes' : 'no'}, Heating={heatingTurnedOn ? 'yes' : 'no'}
    </li>
  );
};

WeatherReportListItem.propTypes = {
  weatherData: weatherType
};

export default WeatherReportListItem;
