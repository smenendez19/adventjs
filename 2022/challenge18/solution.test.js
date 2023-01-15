const dryNumber = require('./solution.js')

test('Test Case 1', () => {
    expect(dryNumber(1, 15)).toStrictEqual([
        1,
        10,
        11,
        12,
        13,
        14,
        15
    ]);
});

test("Test Case 2", () => {
    expect(dryNumber(2, 20)
    ).toStrictEqual([
        2,
        12,
        20
    ]
    );
});