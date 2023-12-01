const findFirstRepeated = require('./solution.js')

test('Test Case 1', () => {
    expect(findFirstRepeated([2, 1, 3, 5, 3, 2])).toStrictEqual(3);
});
