import React from "react";
import { mount, children } from "enzyme";
import App from "./App";

it("renders without crashing", () => {
  const wrapper = mount(<App />);
  wrapper.unmount();
});
