const drawRace = require("./solution");

test("Test Case 1", () => {
  expect(drawRace([0, 5, -3], 10)).toStrictEqual(
    "  ~~~~~~~~~~ /1\n" + 
    " ~~~~~r~~~~ /2\n" +
    "~~~~~~~r~~ /3");
});
