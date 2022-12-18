const createCube = require('./solution.js');

test('Test Case 1', () => {
    expect(createCube(1)).toStrictEqual(
        "/\\_\\\n\\/_/");
});