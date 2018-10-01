import React from "react";
import { mount } from "enzyme";
import WeatherReportListItem from "./WeatherReportListItem";

describe("WeatherReportListItem", () => {
  describe("when acTurnedOn", () => {
    it("should be blue", () => {
      const wrapper = mount(
        <WeatherReportListItem
          acTurnedOn
          heatingTurnedOn={false}
          maxDailyTemp={70}
          minDailyTemp={40}
          date={1}
        />
      );

      expect(wrapper.find("li").prop("style")).toHaveProperty(
        "background",
        "blue"
      );

      wrapper.unmount();
    });
  });

  describe("when heatingTurnedOn", () => {
    it("should be red", () => {
      const wrapper = mount(
        <WeatherReportListItem
          acTurnedOn={false}
          heatingTurnedOn
          maxDailyTemp={70}
          minDailyTemp={40}
          date={1}
        />
      );

      expect(wrapper.find("li").prop("style")).toHaveProperty(
        "background",
        "red"
      );
      wrapper.unmount();
    });
  });

  describe("when acTurnedOn and heatingTurnedOn", () => {
    it("should be purple", () => {
      const wrapper = mount(
        <WeatherReportListItem
          acTurnedOn
          heatingTurnedOn
          maxDailyTemp={70}
          minDailyTemp={40}
          date={1}
        />
      );

      expect(wrapper.find("li").prop("style")).toHaveProperty(
        "background",
        "purple"
      );
      wrapper.unmount();
    });
  });
});
