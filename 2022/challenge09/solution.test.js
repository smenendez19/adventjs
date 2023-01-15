const countTime = require('./solution.js')

test('Test Case 1', () => {
    expect(countTime([0, 1, 1, 0, 1])).toStrictEqual(7);
});

test("Test Case 2", () => {
    expect(countTime([0, 0, 0, 1])).toStrictEqual(21);
});