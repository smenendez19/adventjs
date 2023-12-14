const calculateTime = require('./solution.js')

test('Test Case 1', () => {
    expect(calculateTime(['00:45:00', '00:45:00', '00:00:30', '00:00:30'])).toStrictEqual("-05:29:00")
})

//test('Test Case 2', () => {
//    expect(calculateTime(['00:10:00', '01:00:00', '03:30:00'])).toStrictEqual("-02:20:00")
//})