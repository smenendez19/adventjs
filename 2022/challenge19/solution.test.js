const sortToys = require('./solution.js')

test('Test Case 1', () => {
    expect(sortToys(['ball', 'doll', 'car', 'puzzle'], [2, 3, 1, 0])).toStrictEqual([
        "puzzle",
        "car",
        "ball",
        "doll"
    ]);
});

test("Test Case 2", () => {
    expect(sortToys(['pc', 'xbox', 'ps4', 'switch', 'nintendo'], [3, 1, 0, 2, 4])).toStrictEqual([
        "ps4",
        "xbox",
        "switch",
        "pc",
        "nintendo"
    ]);
});