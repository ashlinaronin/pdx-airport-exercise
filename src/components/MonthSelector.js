import React from "react";
import PropTypes from "prop-types";
import { AVAILABLE_MONTHS } from "../constants";

const MonthSelector = ({ currentMonth, onMonthChange }) => (
  <div>
    <label htmlFor="select-month">
      Select month:&nbsp;
      <select
        name="select-month"
        id="select-month"
        value={currentMonth}
        onChange={onMonthChange}
      >
        {AVAILABLE_MONTHS.map(month => (
          <option value={month} key={month}>
            {month}
          </option>
        ))}
      </select>
    </label>
  </div>
);

MonthSelector.propTypes = {
  currentMonth: PropTypes.string.isRequired,
  onMonthChange: PropTypes.func.isRequired
};

export default MonthSelector;
