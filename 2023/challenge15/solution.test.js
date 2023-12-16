const autonomousDrive = require('./solution.js')

test('Test Case 1', () => {
    expect(autonomousDrive(['..!....', '...*.*.'], ['R', 'R', 'D', 'L'])).toEqual([
        ".......",
        "...*!*."
      ])
})

test('Test Case 2', () => {
    expect(autonomousDrive(['..!....'], ['R', 'L'])).toEqual([
        "..!...."
      ])
})