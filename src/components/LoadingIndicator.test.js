import React from "react";
import { mount } from "enzyme";
import LoadingIndicator from "./LoadingIndicator";

describe("LoadingIndicator", () => {
  describe("when loading is false", () => {
    it("should render nothing", () => {
      const wrapper = mount(<LoadingIndicator loading={false} />);

      expect(wrapper.find("div").children()).toHaveLength(0);
      wrapper.unmount();
    });
  });

  describe("when loading is true", () => {
    it("should render a loading message", () => {
      const wrapper = mount(<LoadingIndicator loading />);

      expect(wrapper.find("div").text()).toEqual("Loading report...");
      wrapper.unmount();
    });
  });
});
