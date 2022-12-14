const getOptimalPath = require('./solution.js');

test('Test Case 1', () => {
    expect(getOptimalPath([
        [0],
        [7, 4],
        [2, 4, 6]
    ])).toStrictEqual(8);
})

test('Test Case 2', () => {
    expect(getOptimalPath([[0], [3, 4], [9, 8, 1]])).toStrictEqual(5);
})

test('Test Case 3', () => {
    expect(getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]])).toStrictEqual(8);
})