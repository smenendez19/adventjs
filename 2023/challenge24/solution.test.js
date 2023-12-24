const getStaircasePaths = require('./solution.js')

test('Test Case 1', () => {
    expect(getStaircasePaths(1, 1)).toEqual([[1]])
})

test('Test Case 2', () => {
    expect(getStaircasePaths(0, 0)).toEqual([[]])
})

test('Test Case 3', () => {
    expect(getStaircasePaths(2, 1)).toEqual([[1, 1]])
})

test('Test Case 4', () => {
    expect(getStaircasePaths(4, 2)).toEqual([
        [
            1,
            1,
            1,
            1
        ],
        [
            1,
            1,
            2
        ],
        [
            1,
            2,
            1
        ],
        [
            2,
            1,
            1
        ],
        [
            2,
            2
        ]

    ])
})