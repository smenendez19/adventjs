const wrapping = require('./solution.js')

test('Test Case 1', () => {
    expect(wrapping(["midu"])).toStrictEqual(
        [
            "******\n*midu*\n******"
        ]);
});

test("Test Case 2", () => {
    expect(wrapping(["a"])).toStrictEqual(
        [
            "***\n*a*\n***"
        ]
    );
});