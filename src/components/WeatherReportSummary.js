import React from "react";
import PropTypes from "prop-types";
import ReportKey from "./ReportKey";
import "./WeatherReportSummary.css";

const WeatherReportSummary = ({ daysAcUsed, daysHeatUsed, month, year }) => {
  return (
    <div className="weather-report-summary">
      <ReportKey />
      <p>
        During {month} {year}, the AC system at Portland International Airport
        was turned on at least once a day for {daysAcUsed} days. The heating
        system was turned on at least once a day for {daysHeatUsed} days.
      </p>
    </div>
  );
};

WeatherReportSummary.propTypes = {
  daysAcUsed: PropTypes.number.isRequired,
  daysHeatUsed: PropTypes.number.isRequired,
  month: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired
};

export default WeatherReportSummary;
