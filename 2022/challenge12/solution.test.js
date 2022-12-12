const selectSleigh = require('./solution.js');

test('Test Case 1', () => {
    expect(selectSleigh(30, [
        { name: "Dasher", consumption: 0.3 },
        { name: "Dancer", consumption: 0.5 },
        { name: "Rudolph", consumption: 0.7 },
        { name: "Midu", consumption: 1 }
    ])).toBe("Dancer");
}
)

test('Test Case 2', () => {
    expect(selectSleigh(50, [
        { name: 'Pedrosillano', consumption: 1 },
        { name: 'SamarJaffal', consumption: 2 },
        { name: 'marcospage', consumption: 3 }
    ])).toBe(null);
}
)