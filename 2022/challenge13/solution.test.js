const getFilesToBackup = require('./solution.js');

test('Test Case 1', () => {
    expect(getFilesToBackup(1546300600, [
        [1, 1546300800],
        [2, 1546300800],
        [1, 1546300900],
        [1, 1546301000],
        [3, 1546301100]
    ])).toStrictEqual([
        1,
        2,
        3
    ]);
}
)

test('Test Case 2', () => {
    expect(getFilesToBackup(1546300800, [
        [1, 1546300800],
        [2, 1546300800],
        [1, 1546300900],
        [1, 1546301000],
        [3, 1546301100]
    ])).toStrictEqual([
        1,
        3
    ]);
}
)

test('Test Case 3', () => {
    expect(getFilesToBackup(1556300600, [
        [1, 1546300800],
        [2, 1546300800],
        [1, 1546300900],
        [1, 1546301000],
        [3, 1546301100]
    ])).toStrictEqual([]);
}
)