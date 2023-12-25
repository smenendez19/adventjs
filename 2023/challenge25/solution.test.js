const travelDistance = require('./solution.js')

test('Test Case 1', () => {
    expect(travelDistance(`.....1....
..S.......
..........
....3.....
......2...`)).toEqual(12)
})

test('Test Case 2', () => {
    expect(travelDistance(`..S.1...`)).toEqual(2)
})

test('Test Case 3', () => {
    expect(travelDistance(`S1`)).toEqual(1)
})

test('Test Case 4', () => {
    expect(travelDistance(`S12....3`)).toEqual(7)
})