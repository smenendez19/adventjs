const findBalancedSegment = require('./solution.js')

test('Test Case 1', () => {
    expect(findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1])).toEqual([2, 5])
})

test('Test Case 2', () => {
    expect(findBalancedSegment([1, 1, 0])).toEqual([1, 2])
})