import React from "react";
import PropTypes from "prop-types";

const LoadingIndicator = ({ loading }) => (
  <div>{loading ? "loading..." : ""}</div>
);

LoadingIndicator.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default LoadingIndicator;
