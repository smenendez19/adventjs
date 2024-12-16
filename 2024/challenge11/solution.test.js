const decodeFilename = require("./solution");

test('Test Case 1', () => {
    expect(decodeFilename('2023122512345678_sleighDesign.png.grinchwa')).toStrictEqual('sleighDesign.png');
});