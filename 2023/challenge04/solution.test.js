const decode = require('./solution.js')

test('Test Case 1', () => {
    expect(decode('hola (odnum)')).toStrictEqual("hola mundo")
})

test('Test Case 2', () => {
    expect(decode('(olleh) (dlrow)!')).toStrictEqual("hello world!")
})

test('Test Case 3', () => {
    expect(decode('sa(u(cla)atn)s')).toStrictEqual("santaclaus")
})