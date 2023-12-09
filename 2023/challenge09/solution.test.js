const adjustLights = require('./solution.js')

test('Test Case 1', () => {
    expect(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])).toStrictEqual(1)
})

test('Test Case 2', () => {
    expect(adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴', '🔴'])).toStrictEqual(3)
})