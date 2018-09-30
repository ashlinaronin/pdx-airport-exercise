import React from "react";
import PropTypes from "prop-types";
import { weatherType } from "../types";
import "./WeatherReportListItem.css";
import { THRESHOLD_AC, THRESHOLD_HEATING } from "../constants";

const BASE_CLASS = "weather-report-list__item";

const WeatherReportListItem = ({ weatherData, date }) => {
  const dailyData = weatherData.daily.data[0];
  const acTurnedOn = dailyData.temperatureMax > THRESHOLD_AC;
  const heatingTurnedOn = dailyData.temperatureMin < THRESHOLD_HEATING;

  const classes = getClasses(acTurnedOn, heatingTurnedOn);

  return (
    <li className={classes}>
      Date=
      {date}, Maxtemp=
      {dailyData.temperatureMax}, Mintemp=
      {dailyData.temperatureMin}, AC=
      {acTurnedOn ? "yes" : "no"}, Heating=
      {heatingTurnedOn ? "yes" : "no"}
    </li>
  );
};

function getClasses(acTurnedOn, heatingTurnedOn) {
  let classes = BASE_CLASS;

  if (acTurnedOn) {
    classes += ` ${BASE_CLASS}--ac`;
  }

  if (heatingTurnedOn) {
    classes += ` ${BASE_CLASS}--heat`;
  }

  return classes;
}

WeatherReportListItem.propTypes = {
  weatherData: weatherType,
  date: PropTypes.number.isRequired
};

export default WeatherReportListItem;
