const decorateTree = require('./solution.js');

test('Test Case 1', () => {
    expect(decorateTree('B P R P')).toStrictEqual([
        "R",
        "P B",
        "R B B",
        "B P R P"
    ]);
})

test('Test Case 2', () => {
    expect(decorateTree('B B')).toStrictEqual([
        "B",
        "B B"
    ]);
})

test('Test Case 3', () => {
    expect(decorateTree('B B P R P R R')).toStrictEqual([
        "B",
        "R P",
        "B P P",
        "P R B R",
        "P P B B P",
        "B R B B B R",
        "B B P R P R R"
    ]);
})