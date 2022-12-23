function executeCommands(commands) {
    let registers = Array(8).fill(0)
    let command, args
    for (let i = 0; i < commands.length; i++) {
        command = commands[i].split(" ")[0]
        args = commands[i].split(" ")[1].split(",")
        switch (command) {
            case "MOV":
                args[1] = Number(args[1].slice(1))
                args[0] = args[0][0] === "V" ? 
                    registers[Number(args[0].slice(1))] 
                    : Number(args[0])
                registers[args[1]] = args[0]
                break
            case "ADD":
                args[0] = Number(args[0].slice(1))
                args[1] = Number(args[1].slice(1))
                let res = registers[args[0]] + registers[args[1]]
                registers[args[0]] = res
                break
            case "DEC":
                registers[Number(args[0].slice(1))]--
                break
            case "INC":
                registers[Number(args[0].slice(1))]++
                break
            case "JMP":
                i = registers[0] != 0 ? Number(args[0]) - 1 : i
                break
        }
    }
    return registers.map(reg => {
        while (reg < 0) reg += 256
        while (reg > 255) reg -= 256
        return reg
    })
}

module.exports = executeCommands

console.log(executeCommands([
    'MOV 5,V00',  // V00 es 5
    'MOV 10,V01', // V01 es 10
    'DEC V00',    // V00 ahora es 4
    'ADD V00,V01' // V00 = V00 + V01 = 14
]))

console.log(executeCommands([
    'MOV 255,V00', // V00 es 255
    'INC V00',     // V00 es 256, desborda a 0
    'DEC V01',     // V01 es -1, desborda a 255
    'DEC V01'      // V01 es 254
]))

console.log(executeCommands([
    'MOV 10,V00', // V00 es 10
    'DEC V00',    // decrementa V00 en 1  <---┐
    'INC V01',    // incrementa V01 en 1      |
    'JMP 1',      // bucle hasta que V00 sea 0 ----┘
    'INC V06'     // incrementa V06 en 1
]))

console.log(executeCommands([
    'MOV 10,V00',
    'MOV V00,V01',
    'MOV V01,V02',
    'MOV V02,V03',
    'MOV V03,V04'
]))