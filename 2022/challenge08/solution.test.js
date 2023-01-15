const checkPart = require('./solution.js')

test('Test Case 1', () => {
    expect(checkPart("uwu")).toStrictEqual(true);
});

test("Test Case 2", () => {
    expect(checkPart("midu")).toStrictEqual(false);
});