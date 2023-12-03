const findNaughtyStep = require('./solution.js')

test('Test Case 1', () => {
    expect(findNaughtyStep('abcd', 'abcde')).toStrictEqual('e')
})

test("Test Case 2", () => {
    expect(findNaughtyStep('iiiii', 'iiiii')).toStrictEqual('')
})

test("Test Case 3", () => {
    expect(findNaughtyStep('iiiiia', 'iiiii')).toStrictEqual('a')
})

test("Test Case 4", () => {
    expect(findNaughtyStep('', 'a')).toStrictEqual('a')
})

test("Test Case 5", () => {
    expect(findNaughtyStep('a', '')).toStrictEqual('a')
})

test("Test Case 6", () => {
    expect(findNaughtyStep('', '')).toStrictEqual('')
})