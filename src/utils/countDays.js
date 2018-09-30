import { THRESHOLD_AC, THRESHOLD_HEATING } from "../constants";

export function countDaysAcAndHeatUsed(weatherArray) {
  let daysAcUsed = 0;
  let daysHeatUsed = 0;

  weatherArray.forEach(weatherData => {
    const dailyData = weatherData.daily.data[0];
    if (dailyData.temperatureMax > THRESHOLD_AC) {
      daysAcUsed += 1;
    }

    if (dailyData.temperatureMin < THRESHOLD_HEATING) {
      daysHeatUsed += 1;
    }
  });

  return { daysAcUsed, daysHeatUsed };
}
