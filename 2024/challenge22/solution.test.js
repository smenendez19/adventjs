const generateGiftSets = require("./solution");

test("Test Case 1", () => {
  expect(generateGiftSets(["car", "doll", "puzzle"])).toStrictEqual([
    ["car"],
    ["doll"],
    ["puzzle"],
    ["car", "doll"],
    ["car", "puzzle"],
    ["doll", "puzzle"],
    ["car", "doll", "puzzle"],
  ]);
});
