const organizeGifts = require('./solution.js')

test('Test Case 1', () => {
    expect(organizeGifts('76a11b')).toStrictEqual('[a]{a}{a}(aaaaaa){b}(b)')
})