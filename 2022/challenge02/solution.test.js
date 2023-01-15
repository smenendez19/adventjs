const countHours = require('./solution.js')

test('Test Case 1', () => {
    expect(countHours(2023, ['01/06', '04/01', '12/25'])).toStrictEqual(4);
});

test("Test Case 2", () => {
    expect(countHours(1985, ['01/01', '01/06', '02/02', '02/17', '02/28', '06/03', '12/06', '12/25'])).toStrictEqual(10);
});