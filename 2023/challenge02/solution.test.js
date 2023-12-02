const manufacture = require('./solution.js')

test('Test Case 1', () => {
    expect(manufacture(['tren', 'oso', 'pelota'], 'tronesa')).toStrictEqual([
        "tren",
        "oso"
      ]);
});
