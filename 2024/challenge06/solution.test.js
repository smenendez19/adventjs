const inBox = require("./solution");

test("Test Case 1", () => {
  expect(inBox([
    "###",
    "#*#",
    "###"
  ])).toStrictEqual(true);
});
