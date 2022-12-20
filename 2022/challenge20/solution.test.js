const howManyReindeers = require('./solution.js');

test('Test Case 1', () => {
    expect(howManyReindeers([
        { type: 'Nuclear', weightCapacity: 50 },
        { type: 'Electric', weightCapacity: 10 },
        { type: 'Gasoline', weightCapacity: 5 },
        { type: 'Diesel', weightCapacity: 1 }
    ], [
        { country: 'Spain', weight: 30 },
        { country: 'France', weight: 17 },
        { country: 'Italy', weight: 50 }
    ]))
        .toStrictEqual([
            {
                "country": "Spain",
                "reindeers": [
                    {
                        "type": "Electric",
                        "num": 1
                    },
                    {
                        "type": "Gasoline",
                        "num": 3
                    },
                    {
                        "type": "Diesel",
                        "num": 5
                    }
                ]
            },
            {
                "country": "France",
                "reindeers": [
                    {
                        "type": "Electric",
                        "num": 1
                    },
                    {
                        "type": "Gasoline",
                        "num": 1
                    },
                    {
                        "type": "Diesel",
                        "num": 2
                    }
                ]
            },
            {
                "country": "Italy",
                "reindeers": [
                    {
                        "type": "Electric",
                        "num": 3
                    },
                    {
                        "type": "Gasoline",
                        "num": 3
                    },
                    {
                        "type": "Diesel",
                        "num": 5
                    }
                ]
            }
        ]);
})