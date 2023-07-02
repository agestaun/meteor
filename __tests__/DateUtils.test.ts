import { timestampToSecondsAndMillis } from "../src/utils/DateUtils";

describe("Date Utils Tests", () => {
  it("should return 2 seconds and 00 milliseconds", function () {
    const milliseconds = 2000;
    const expected = "2,00";
    const result = timestampToSecondsAndMillis(milliseconds);
    expect(result).toBe(expected);
  });

  it("should return 5 seconds and 55 milliseconds", function () {
    const milliseconds = 5557;
    const expected = "5,55";
    const result = timestampToSecondsAndMillis(milliseconds);
    expect(result).toBe(expected);
  });

  it("should return 5 seconds and 05 milliseconds", function () {
    const milliseconds = 5057;
    const expected = "5,05";
    const result = timestampToSecondsAndMillis(milliseconds);
    expect(result).toBe(expected);
  });

  it("should return 3 seconds and 02 milliseconds", function () {
    const milliseconds = 3002;
    const expected = "3,00";
    const result = timestampToSecondsAndMillis(milliseconds);
    expect(result).toBe(expected);
  });

  it("should return 0 seconds and 00 milliseconds", function () {
    const milliseconds = 0;
    const expected = "0,00";
    const result = timestampToSecondsAndMillis(milliseconds);
    expect(result).toBe(expected);
  });

  it("should return 10 seconds and 06 milliseconds", function () {
    const milliseconds = 10608;
    const expected = "10,60";
    const result = timestampToSecondsAndMillis(milliseconds);
    expect(result).toBe(expected);
  });
});
