const drawGift = require('./solution.js')

test('Test Case 1', () => {
    expect(drawGift(4, '+')).toStrictEqual(
        "   ####" + "\n" +
        "  #++##" + "\n" +
        " #++#+#" + "\n" +
        "####++#" + "\n" +
        "#++#+#" + "\n" +
        "#++##" + "\n" +
        "####" + "\n"
    )
})