const fixPackages = require("./solution");

test("Test Case 1", () => {
  expect(fixPackages("a(cb)de")).toStrictEqual(
    "abcde"
  );
});
