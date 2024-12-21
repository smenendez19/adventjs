const distributeWeight = require("./solution");

test("Test Case 1", () => {
  expect(distributeWeight(3)).toStrictEqual(
` _ 
|_|_
|___|`);
});
