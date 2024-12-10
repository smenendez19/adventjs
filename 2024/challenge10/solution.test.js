const compile = require("./solution");

test("Test Case 1", () => {
  expect(
    compile([
      "MOV -1 C", // copia -1 al registro 'C',
      "INC C", // incrementa el valor del registro 'C'
      "JMP C 1", // salta a la instrucción en el índice 1 si 'C' es 0
      "MOV C A", // copia el registro 'C' al registro 'a',
      "INC A", // incrementa el valor del registro 'a'
    ])
  ).toStrictEqual(2);
});


test("Test Case 2", () => {
    expect(
      compile([
        "JMP A 2",
        "MOV -1 B",
        "INC B",
        "JMP B 1",
        "MOV B A"
      ])
    ).toStrictEqual(1);
  });
  