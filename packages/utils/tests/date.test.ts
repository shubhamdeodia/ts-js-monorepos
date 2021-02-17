import { formatTimestamp } from "../src";

describe("formatTimestamp() tests", function () {
  test("01-01-2020", () => {
    expect(formatTimestamp(new Date("01-01-2020"))).toBe(
      "Jan 01, 2020 00:01:00 AM"
    );
  });
});
