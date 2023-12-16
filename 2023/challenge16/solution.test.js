const transformTree = require('./solution.js')

test('Test Case 1', () => {
    expect(transformTree([1, 2, 3])).toEqual({
        "value": 1,
        "left": {
          "value": 2,
          "left": null,
          "right": null
        },
        "right": {
          "value": 3,
          "left": null,
          "right": null
        }
      })
})
