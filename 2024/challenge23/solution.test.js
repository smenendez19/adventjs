const findMissingNumbers = require("./solution");

test("Test Case 1", () => {
  expect(findMissingNumbers([1, 2, 4, 6])).toStrictEqual([
    3,
    5
  ]);
});
