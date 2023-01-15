const getGiftsToRefill = require('./solution.js')

test('Test Case 1', () => {
    expect(getGiftsToRefill([], [], [])).toStrictEqual([]);
});

test("Test Case 2", () => {
    expect(getGiftsToRefill(['a', 'a'], ['b', 'b'], ['c', 'c'])).toStrictEqual([
        "a",
        "b",
        "c"
    ]);
});