function executeCommands(commands) {
    let registers = Array(8).fill(0)
    let i = 0
    const actions = {
        "MOV": (args) => {
            args[0] = args[0][0] === "V" ? 
                registers[Number(args[0].slice(1))] 
                : Number(args[0])
            registers[Number(args[1].slice(1))] = args[0]
        },
        "ADD": (args) => registers[Number(args[0].slice(1))] =
            (registers[Number(args[0].slice(1))] +
                registers[Number(args[1].slice(1))]) % 256
        ,
        "DEC": (args) => registers[Number(args[0].slice(1))] =
            (--registers[Number(args[0].slice(1))] + 256) % 256,
        "INC": (args) => registers[Number(args[0].slice(1))] =
            ++registers[Number(args[0].slice(1))] % 256,
        "JMP": (args) => i = 
            ((Number(args[0]) - 1) * (registers[0] != 0)) + 
            (i * (registers[0] == 0))
    }
    for (; i < commands.length; i++) {
        const command = commands[i].split(" ")[0]
        const args = commands[i].split(" ")[1].split(",")
        actions[command](args)
    }
    return registers
}

module.exports = executeCommands
