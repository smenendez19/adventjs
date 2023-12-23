const organizeChristmasDinner = require('./solution.js')

test('Test Case 1', () => {
    expect(organizeChristmasDinner([
        ["christmas turkey", "turkey", "sauce", "herbs"],
        ["cake", "flour", "sugar", "egg"],
        ["hot chocolate", "chocolate", "milk", "sugar"],
        ["pizza", "sauce", "tomato", "cheese", "ham"]
    ])).toEqual([
        [
            "sauce",
            "christmas turkey",
            "pizza"
        ],
        [
            "sugar",
            "cake",
            "hot chocolate"
        ]
    ])
})