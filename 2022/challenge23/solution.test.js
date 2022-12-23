const executeCommands = require('./solution.js');

test('Test Case 1', () => {
    expect(
        executeCommands([
            'MOV 5,V00',  // V00 es 5
            'MOV 10,V01', // V01 es 10
            'DEC V00',    // V00 ahora es 4
            'ADD V00,V01' // V00 = V00 + V01 = 14
        ]))
    .toStrictEqual([
        14,
        10,
        0,
        0,
        0,
        0,
        0,
        0
      ])
})

test('Test Case 2', () => {
    expect(
        executeCommands([
            'MOV 255,V00', // V00 es 255
            'INC V00',     // V00 es 256, desborda a 0
            'DEC V01',     // V01 es -1, desborda a 255
            'DEC V01'      // V01 es 254
        ]))
    .toStrictEqual([
        0,
        254,
        0,
        0,
        0,
        0,
        0,
        0
      ])
})

test('Test Case 3', () => {
    expect(
        executeCommands([
            'MOV 10,V00', // V00 es 10
            'DEC V00',    // decrementa V00 en 1  <---┐
            'INC V01',    // incrementa V01 en 1      |
            'JMP 1',      // bucle hasta que V00 sea 0 ----┘
            'INC V06'     // incrementa V06 en 1
        ]))
    .toStrictEqual([
        0,
        10,
        0,
        0,
        0,
        0,
        1,
        0
      ])
})

test('Test Case 4', () => {
    expect(
        executeCommands([
            'MOV 10,V00',
            'MOV V00,V01',
            'MOV V01,V02',
            'MOV V02,V03',
            'MOV V03,V04'
        ]))
    .toStrictEqual([
        10,
        10,
        10,
        10,
        10,
        0,
        0,
        0
      ])
})