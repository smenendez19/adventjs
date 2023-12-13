const checkIsValidCopy = require('./solution.js')

test('Test Case 1', () => {
    expect(checkIsValidCopy('Santa Claus', '###:. c:+##')).toStrictEqual(true)
})

test('Test Case 2', () => {
    expect(checkIsValidCopy('3 #egalos', '3 .+:# #:')).toStrictEqual(true)
})