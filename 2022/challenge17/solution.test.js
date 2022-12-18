const carryGifts = require('./solution.js');

test('Test Case 1', () => {
    expect(carryGifts(['game', 'bike', 'book', 'toy'], 10))
        .toStrictEqual([
            "game bike",
            "book toy"
        ]);
})

test('Test Case 2', () => {
    expect(carryGifts(['toy', 'toy', 'toy', 'toy'], 2))
        .toStrictEqual([]);
})