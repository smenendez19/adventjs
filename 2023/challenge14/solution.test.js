const maxGifts = require('./solution.js')

test('Test Case 1', () => {
    expect(maxGifts([2, 4, 2])).toStrictEqual(4)
})

test('Test Case 2', () => {
    expect(maxGifts([5, 1, 1, 5])).toStrictEqual(10)
})

test('Test Case 3', () => {
    expect(maxGifts([4, 1, 1, 4, 2, 1])).toStrictEqual(9)
})

test('Test Case 4', () => {
    expect(maxGifts([1, 3, 1, 3, 100])).toStrictEqual(103)
})