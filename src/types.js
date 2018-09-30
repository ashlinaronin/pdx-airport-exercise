import PropTypes from 'prop-types';

export const weatherType = PropTypes.shape({
  daily: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({
      apparentTemperatureHigh: PropTypes.number.isRequired,
      apparentTemperatureHighTime: PropTypes.number.isRequired,
      apparentTemperatureLow: PropTypes.number.isRequired,
      apparentTemperatureLowTime: PropTypes.number.isRequired,
      apparentTemperatureMax: PropTypes.number.isRequired,
      apparentTemperatureMaxTime: PropTypes.number.isRequired,
      apparentTemperatureMin: PropTypes.number.isRequired,
      apparentTemperatureMinTime: PropTypes.number.isRequired,
      cloudCover: PropTypes.number.isRequired,
      dewPoint: PropTypes.number.isRequired,
      humidity: PropTypes.number.isRequired,
      icon: PropTypes.string.isRequired,
      moonPhase: PropTypes.number.isRequired,
      precipIntensity: PropTypes.number.isRequired,
      precipIntensityMax: PropTypes.number.isRequired,
      precipIntensityMaxTime: PropTypes.number,
      precipProbability: PropTypes.number.isRequired,
      pressure: PropTypes.number.isRequired,
      summary: PropTypes.string.isRequired,
      sunriseTime: PropTypes.number.isRequired,
      sunsetTime: PropTypes.number.isRequired,
      temperatureHigh: PropTypes.number.isRequired,
      temperatureHighTime: PropTypes.number.isRequired,
      temperatureLow: PropTypes.number.isRequired,
      temperatureLowTime: PropTypes.number.isRequired,
      temperatureMax: PropTypes.number.isRequired,
      temperatureMaxTime: PropTypes.number.isRequired,
      temperatureMin: PropTypes.number.isRequired,
      temperatureMinTime: PropTypes.number.isRequired,
      time: PropTypes.number.isRequired,
      uvIndex: PropTypes.number.isRequired,
      uvIndexTime: PropTypes.number.isRequired,
      visibility: PropTypes.number.isRequired,
      windBearing: PropTypes.number.isRequired,
      windGust: PropTypes.number.isRequired,
      windGustTime: PropTypes.number.isRequired,
      windSpeed: PropTypes.number.isRequired
    }).isRequired).isRequired
  }).isRequired,
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  offset: PropTypes.number.isRequired,
  timezone: PropTypes.string.isRequired
}).isRequired;