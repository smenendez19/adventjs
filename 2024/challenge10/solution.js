function compile(instructions) {
  const registers = {
    A: undefined,
  };

  for (let i = 0; i < instructions.length; i++) {
    const inst = instructions[i].split(" ");
    switch (inst[0]) {
      case "MOV":
        if (isNaN(inst[1])) {
          registers[inst[2]] = registers[inst[1]];
        } else {
          registers[inst[2]] = Number(inst[1]);
        }
        break;
      case "INC":
        registers[inst[1]] === undefined
          ? (registers[inst[1]] = 1)
          : registers[inst[1]]++;
        break;
      case "DEC":
        registers[inst[1]] === undefined
          ? (registers[inst[1]] = 1)
          : registers[inst[1]]--;
        break;
      case "JMP":
        if (registers[inst[1]] === 0 || registers[inst[1]] === undefined)
          i = Number(inst[2]) - 1;
        break;
    }
  }

  return registers["A"];
}

module.exports = compile;
