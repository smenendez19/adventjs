const fixGiftList = require("./solution");

test("Test Case 1", () => {
  expect(
    fixGiftList(
      ["puzzle", "car", "doll", "car"],
      ["car", "puzzle", "doll", "ball"]
    )
  ).toStrictEqual({
    missing: { ball: 1 },
    extra: { car: 1 },
  });
});
