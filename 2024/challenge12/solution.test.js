const calculatePrice = require("./solution");

test('Test Case 1', () => {
    expect(calculatePrice('*o@')).toStrictEqual(94);
});