import React from "react";
import PropTypes from "prop-types";

const LoadingIndicator = ({ loading }) => (
  <div className="loading-indicator">{loading ? "Loading report..." : ""}</div>
);

LoadingIndicator.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default LoadingIndicator;
