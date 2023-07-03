import { formatTimestampToString } from "../src/utils/DateUtils";

describe("Date Utils Tests", () => {
  it("should return 2 seconds and 00 milliseconds", function () {
    const milliseconds = 2000;
    const expected = "2,00 seconds";
    const result = formatTimestampToString(milliseconds);
    expect(result).toBe(expected);
  });

  it("should return 5 seconds and 55 milliseconds", function () {
    const milliseconds = 5557;
    const expected = "5,55 seconds";
    const result = formatTimestampToString(milliseconds);
    expect(result).toBe(expected);
  });

  it("should return 5 seconds and 05 milliseconds", function () {
    const milliseconds = 5057;
    const expected = "5,05 seconds";
    const result = formatTimestampToString(milliseconds);
    expect(result).toBe(expected);
  });

  it("should return 3 seconds and 00 milliseconds", function () {
    const milliseconds = 3002;
    const expected = "3,00 seconds";
    const result = formatTimestampToString(milliseconds);
    expect(result).toBe(expected);
  });

  it("should return 0 seconds and 00 milliseconds", function () {
    const milliseconds = 0;
    const expected = "0,00 seconds";
    const result = formatTimestampToString(milliseconds);
    expect(result).toBe(expected);
  });

  it("should return 10 seconds and 60 milliseconds", function () {
    const milliseconds = 10608;
    const expected = "10,60 seconds";
    const result = formatTimestampToString(milliseconds);
    expect(result).toBe(expected);
  });

  it("should return 2 minutes 0,60 seconds", function () {
    const milliseconds = 120608;
    const expected = "2 minutes 0,60 seconds";
    const result = formatTimestampToString(milliseconds);
    expect(result).toBe(expected);
  });

  it("should return 10 minutes 14,12 seconds", function () {
    const milliseconds = 614120;
    const expected = "10 minutes 14,12 seconds";
    const result = formatTimestampToString(milliseconds);
    expect(result).toBe(expected);
  });
});
