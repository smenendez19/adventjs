const distributeGifts = require('./solution.js')

test('Test Case 1', () => {
    expect(distributeGifts([
        [4, 5, 1],
        [6, null, 3],
        [8, null, 4]
      ])).toEqual([
        [5, 3, 3],
        [6, 5, 3],
        [7, 6, 4]
      ])
})