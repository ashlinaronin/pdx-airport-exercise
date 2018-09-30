import React from "react";
import PropTypes from "prop-types";
import { weatherType } from "../types";
import "./WeatherReportListItem.css";

const BASE_CLASS = "weather-report-list__item";

const WeatherReportListItem = ({ weatherData, date }) => {
  const dailyData = weatherData.daily.data[0];
  const acTurnedOn = dailyData.temperatureMax > 75;
  const heatingTurnedOn = dailyData.temperatureMin < 62;

  const classes = getClasses(acTurnedOn, heatingTurnedOn);

  return (
    <li className={classes}>
      Date=
      {date}, AC=
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
