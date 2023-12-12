const getIndexsForPalindrome = require('./solution.js')

test('Test Case 1', () => {
    expect(getIndexsForPalindrome("abab")).toEqual([
        0,
        1
    ])
})