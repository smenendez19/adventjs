const createChristmasTree = require('./solution.js')

test('Test Case 1', () => {
    expect(createChristmasTree("x", 3)).toStrictEqual(
    "  x\n" +
    " x x\n" +
    "x x x\n" + 
    "  |\n")
})