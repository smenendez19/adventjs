const getCompleted = require('./solution.js');

test('Test Case 1', () => {
    expect(getCompleted('01:00:00', '03:00:00')).toBe("1/3");
}
)

test('Test Case 2', () => {
    expect(getCompleted('02:00:00', '04:00:00')).toBe("1/2");
}
)

test('Test Case 3', () => {
    expect(getCompleted('01:00:00', '01:00:00')).toBe("1/1");
}
)

test('Test Case 4', () => {
    expect(getCompleted('00:10:00', '01:00:00')).toBe("1/6");
}
)

test('Test Case 5', () => {
    expect(getCompleted('01:10:10', '03:30:30')).toBe("1/3");
}
)

test('Test Case 6', () => {
    expect(getCompleted('02:20:20', '03:30:30')).toBe("2/3");
}
)

test("Test Case 7", () => {
    expect(getCompleted('03:30:30', '05:50:50')).toBe("3/5")
})