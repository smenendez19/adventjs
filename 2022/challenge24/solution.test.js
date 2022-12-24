const canExit = require('./solution.js');

test('Test Case 1', () => {
    expect(
        canExit([
            [' ', ' ', 'W', ' ', 'S'],
            [' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', 'W', ' '],
            ['W', 'W', ' ', 'W', 'W'],
            [' ', ' ', ' ', ' ', 'E']
        ]))
        .toStrictEqual(true)
})

test('Test Case 2', () => {
    expect(
        canExit([
            [' ', ' ', 'W', 'W', 'S'],
            [' ', ' ', ' ', 'W', ' '],
            [' ', ' ', ' ', 'W', ' '],
            ['W', 'W', ' ', 'W', 'W'],
            [' ', ' ', ' ', ' ', 'E']
        ]))
        .toStrictEqual(false)
})