import React from "react";
import PropTypes from "prop-types";
import "./WeatherReportListItem.css";

const BASE_CLASS = "weather-report-list__item";

const WeatherReportListItem = ({
  acTurnedOn,
  heatingTurnedOn,
  maxDailyTemp,
  minDailyTemp,
  date
}) => {
  const classes = getClasses(acTurnedOn, heatingTurnedOn);

  return (
    <li className={classes}>
      <strong>{date}.</strong>
      &nbsp;
      <br />
      {maxDailyTemp}
      &deg;
      <br />
      {minDailyTemp}
      &deg;
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
  acTurnedOn: PropTypes.bool.isRequired,
  heatingTurnedOn: PropTypes.bool.isRequired,
  maxDailyTemp: PropTypes.number.isRequired,
  minDailyTemp: PropTypes.number.isRequired,
  date: PropTypes.number.isRequired
};

export default WeatherReportListItem;
