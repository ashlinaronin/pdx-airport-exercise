import { countDaysAcAndHeatUsed } from "./countDays";
import testData from "./countDays.testData.json";

describe("countDays", () => {
  describe("when counting days when heating was used in test data", () => {
    it("the result should be an object containing expected properties", () => {
      const count = countDaysAcAndHeatUsed(testData);
      expect(count).toHaveProperty("daysAcUsed");
      expect(count).toHaveProperty("daysHeatUsed");
    });
  });

  describe("when counting days when heating was used in test data", () => {
    it("the result should be 4", () => {
      const count = countDaysAcAndHeatUsed(testData);
      expect(count).toHaveProperty("daysHeatUsed", 4);
    });
  });

  describe("when counting days when AC was used in test data", () => {
    it("the result should be 0", () => {
      const count = countDaysAcAndHeatUsed(testData);
      expect(count).toHaveProperty("daysAcUsed", 0);
    });
  });
});
