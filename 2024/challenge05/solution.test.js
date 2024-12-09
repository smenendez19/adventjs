const shoes = [
  { type: "I", size: 38 },
  { type: "R", size: 38 },
  { type: "R", size: 42 },
  { type: "I", size: 41 },
  { type: "I", size: 42 },
];

const organizeShoes = require("./solution");

test("Test Case 1", () => {
  expect(organizeShoes(shoes)).toStrictEqual([38, 42]);
});
