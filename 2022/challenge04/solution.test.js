const fitsInOneBox = require('./solution.js')

test('Test Case 1', () => {
    expect(fitsInOneBox([
        { l: 1, w: 1, h: 10 },
        { l: 3, w: 3, h: 12 },
        { l: 2, w: 2, h: 1 },
      ])).toStrictEqual(false);
});

test("Test Case 2", () => {
    expect(fitsInOneBox([
        { l: 1, w: 1, h: 1 },
        { l: 2, w: 2, h: 2 }
      ])).toStrictEqual(true);
});