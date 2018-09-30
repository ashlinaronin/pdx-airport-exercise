import React from "react";
import PropTypes from "prop-types";
import "./WeatherReportListItem.css";

const WeatherReportListItem = ({
  acTurnedOn,
  heatingTurnedOn,
  maxDailyTemp,
  minDailyTemp,
  date
}) => {
  const color = getColor(acTurnedOn, heatingTurnedOn);

  return (
    <li className="weather-report-list__item" style={{ background: color }}>
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

function getColor(acTurnedOn, heatingTurnedOn) {
  if (acTurnedOn && heatingTurnedOn) {
    return "purple";
  }

  if (acTurnedOn) {
    return "blue";
  } else if (heatingTurnedOn) {
    return "red";
  } else {
    return "grey";
  }
}

WeatherReportListItem.propTypes = {
  acTurnedOn: PropTypes.bool.isRequired,
  heatingTurnedOn: PropTypes.bool.isRequired,
  maxDailyTemp: PropTypes.number.isRequired,
  minDailyTemp: PropTypes.number.isRequired,
  date: PropTypes.number.isRequired
};

export default WeatherReportListItem;
