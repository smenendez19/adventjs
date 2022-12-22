const checkStepNumbers = require('./solution.js');

test('Test Case 1', () => {
    expect(
        checkStepNumbers(
            ["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"],
            [1, 33, 10, 2, 44, 20]
        )).toStrictEqual(true)
})

test('Test Case 2', () => {
    expect(
        checkStepNumbers(
            ["tree_1", "tree_1", "house"],
            [2, 1, 10]
        )).toStrictEqual(false)
})