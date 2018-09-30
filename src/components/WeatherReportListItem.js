import React from "react";
import PropTypes from "prop-types";
import {weatherType} from "../types";

const WeatherReportListItem = ({ weatherData, date }) => {
  const dailyData = weatherData.daily.data[0];
  const acTurnedOn = dailyData.temperatureMax > 75;
  const heatingTurnedOn = dailyData.temperatureMin < 62;

  return (
    <li>
      Date={date}, AC={acTurnedOn ? 'yes' : 'no'}, Heating={heatingTurnedOn ? 'yes' : 'no'}
    </li>
  );
};

WeatherReportListItem.propTypes = {
  weatherData: weatherType,
  date: PropTypes.number.isRequired
};

export default WeatherReportListItem;
