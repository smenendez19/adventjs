const detectBombs = require("./solution");

test("Test Case 1", () => {
  expect(
    detectBombs([
      [true, false, false],
      [false, true, false],
      [false, false, false],
    ])
  ).toStrictEqual([
    [1, 2, 1],
    [2, 1, 1],
    [1, 1, 1],
  ]);
});
