const optimizeIntervals = require('./solution')

test('Test case 1', () => {
    const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]
    const output = [[1, 6], [8, 10], [15, 18]]
    expect(optimizeIntervals(intervals)).toEqual(output)
    }
)