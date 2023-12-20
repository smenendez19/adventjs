const revealSabotage = require('./solution.js')

test('Test Case 1', () => {
    expect(revealSabotage([
        ['*', ' ', ' ', ' '],
        [' ', ' ', '*', ' '],
        [' ', ' ', ' ', ' '],
        ['*', ' ', ' ', ' ']
      ])).toEqual([
        ['*', '2', '1', '1'],
        ['1', '2', '*', '1'],
        ['1', '2', '1', '1'],
        ['*', '1', ' ', ' ']
    ])
})
