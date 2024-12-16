const minMovesToStables = require("./solution");

test("Test Case 1", () => {
    expect(minMovesToStables([1, 2, 3], [1, 2, 3])).toStrictEqual(0);
});