const createXmasTree = require("./solution");

test("Test Case 1", () => {
  expect(createXmasTree(3, '+')).toStrictEqual(
    "__+__\n_+++_\n+++++\n__#__\n__#__"
  );
});
