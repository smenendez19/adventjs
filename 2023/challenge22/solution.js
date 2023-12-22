function compile(code) {
    let acc = 0
    let idxSaved = null
    let startCond = false
    let cond = true
    for (let i = 0; i < code.length; i++) {
        const c = code[i]
        switch (c) {
            case ("¿"):
                startCond = true
                cond = acc > 0
                break
            case ("?"):
                startCond = false
                cond = true
                break
        }
        if (startCond && !cond) continue
        switch (c) {
            case ("+"):
                acc += 1
                break
            case ("*"):
                acc = acc * 2
                break
            case ("-"):
                acc -= 1
                break
            case ("%"):
                idxSaved = i
                break
            case ("<"):
                if (idxSaved) i = idxSaved
                idxSaved = null
                break
        }
    }
    return acc
}

module.exports = compile