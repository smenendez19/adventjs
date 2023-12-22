const compile = require('./solution.js')

test('Test Case 1', () => {
    expect(compile('--¿+++?+++¿--?')).toEqual(-1)
})