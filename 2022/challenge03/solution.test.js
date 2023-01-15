const distributeGifts = require('./solution.js')

test('Test Case 1', () => {
    expect(distributeGifts(['a', 'b', 'c'], ['d', 'e'])).toStrictEqual(1);
});

test("Test Case 2", () => {
    expect(distributeGifts(['videogames', 'console'], ['midu'])).toStrictEqual(0);
});