import { getWeather } from "./weather";
import { PDX_LATITUDE, PDX_LONGITUDE } from "../constants";

describe("weather", () => {
  describe("when getting weather data for January 2018", () => {
    it("there should be 31 entries", async () => {
      expect.assertions(1);
      const data = await getWeather(
        "January",
        "2018",
        PDX_LATITUDE,
        PDX_LONGITUDE
      );
      expect(data).toHaveLength(31);
    });
  });

  describe("when getting weather data for April 2018", () => {
    it("there should be 30 entries", async () => {
      expect.assertions(1);
      const data = await getWeather(
        "April",
        "2018",
        PDX_LATITUDE,
        PDX_LONGITUDE
      );
      expect(data).toHaveLength(30);
    });
  });
});
