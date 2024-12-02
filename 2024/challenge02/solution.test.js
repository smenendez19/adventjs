const createFrame = require("./solution");

test("Test Case 1", () => {
  expect(createFrame(["midu"])).toStrictEqual(
    "********" + "\n" + "* midu *" + "\n" + "********"
  );
});
