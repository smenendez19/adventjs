const moveTrain = require("./solution");

test("Test Case 1", () => {
  expect(moveTrain(['·····', '*····', '@····', 'o····', 'o····'], "U")).toStrictEqual("eat");
});
