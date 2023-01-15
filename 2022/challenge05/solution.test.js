const getMaxGifts = require('./solution.js')

test('Test Case 1', () => {
    expect(getMaxGifts([12, 3, 11, 5, 7], 20, 3)).toStrictEqual(20);
});

test("Test Case 2", () => {
    expect(getMaxGifts([50], 15, 1)).toStrictEqual(0);
});