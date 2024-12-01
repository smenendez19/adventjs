const prepareGifts = require("./solution");

test("Test Case 1", () => {
  expect(prepareGifts([100, 1000, 100, 500, 200, 500, 200])).toStrictEqual([
    100, 200, 500, 1000,
  ]);
});
