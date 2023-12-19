function drawClock(time) {
    let clock = [
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ','*',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ','*',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    ]

    const numbers = time.split(":").join("").split("")
    const rp = [0, 4, 10, 14]
    for (let i = 0; i < 4; i++) {
        const r = rp[i]
        switch (numbers[i]) {
            case "0":
                clock[0].splice(r, 3, "*", "*", "*")
                clock[1].splice(r, 3, "*", " ", "*")
                clock[2].splice(r, 3, "*", " ", "*")
                clock[3].splice(r, 3, "*", " ", "*")
                clock[4].splice(r, 3, "*", " ", "*")
                clock[5].splice(r, 3, "*", " ", "*")
                clock[6].splice(r, 3, "*", "*", "*")
                break
            case "1":
                clock[0].splice(r, 3, " ", " ", "*")
                clock[1].splice(r, 3, " ", " ", "*")
                clock[2].splice(r, 3, " ", " ", "*")
                clock[3].splice(r, 3, " ", " ", "*")
                clock[4].splice(r, 3, " ", " ", "*")
                clock[5].splice(r, 3, " ", " ", "*")
                clock[6].splice(r, 3, " ", " ", "*")
                break
            case "2":
                clock[0].splice(r, 3, "*", "*", "*")
                clock[1].splice(r, 3, " ", " ", "*")
                clock[2].splice(r, 3, " ", " ", "*")
                clock[3].splice(r, 3, "*", "*", "*")
                clock[4].splice(r, 3, "*", " ", " ")
                clock[5].splice(r, 3, "*", " ", " ")
                clock[6].splice(r, 3, "*", "*", "*")
                break
            case "3":
                clock[0].splice(r, 3, "*", "*", "*")
                clock[1].splice(r, 3, " ", " ", "*")
                clock[2].splice(r, 3, " ", " ", "*")
                clock[3].splice(r, 3, "*", "*", "*")
                clock[4].splice(r, 3, " ", " ", "*")
                clock[5].splice(r, 3, " ", " ", "*")
                clock[6].splice(r, 3, "*", "*", "*")
                break
            case "4":
                clock[0].splice(r, 3, "*", " ", "*")
                clock[1].splice(r, 3, "*", " ", "*")
                clock[2].splice(r, 3, "*", " ", "*")
                clock[3].splice(r, 3, "*", "*", "*")
                clock[4].splice(r, 3, " ", " ", "*")
                clock[5].splice(r, 3, " ", " ", "*")
                clock[6].splice(r, 3, " ", " ", "*")
                break
            case "5":
                clock[0].splice(r, 3, "*", "*", "*")
                clock[1].splice(r, 3, "*", " ", " ")
                clock[2].splice(r, 3, "*", " ", " ")
                clock[3].splice(r, 3, "*", "*", "*")
                clock[4].splice(r, 3, " ", " ", "*")
                clock[5].splice(r, 3, " ", " ", "*")
                clock[6].splice(r, 3, "*", "*", "*")
                break
            case "6":
                clock[0].splice(r, 3, "*", "*", "*")
                clock[1].splice(r, 3, "*", " ", " ")
                clock[2].splice(r, 3, "*", " ", " ")
                clock[3].splice(r, 3, "*", "*", "*")
                clock[4].splice(r, 3, "*", " ", "*")
                clock[5].splice(r, 3, "*", " ", "*")
                clock[6].splice(r, 3, "*", "*", "*")
                break
            case "7":
                clock[0].splice(r, 3, "*", "*", "*")
                clock[1].splice(r, 3, " ", " ", "*")
                clock[2].splice(r, 3, " ", " ", "*")
                clock[3].splice(r, 3, " ", " ", "*")
                clock[4].splice(r, 3, " ", " ", "*")
                clock[5].splice(r, 3, " ", " ", "*")
                clock[6].splice(r, 3, " ", " ", "*")
                break
            case "8":
                clock[0].splice(r, 3, "*", "*", "*")
                clock[1].splice(r, 3, "*", " ", "*")
                clock[2].splice(r, 3, "*", " ", "*")
                clock[3].splice(r, 3, "*", "*", "*")
                clock[4].splice(r, 3, "*", " ", "*")
                clock[5].splice(r, 3, "*", " ", "*")
                clock[6].splice(r, 3, "*", "*", "*")
                break
            case "9":
                clock[0].splice(r, 3, "*", "*", "*")
                clock[1].splice(r, 3, "*", " ", "*")
                clock[2].splice(r, 3, "*", " ", "*")
                clock[3].splice(r, 3, "*", "*", "*")
                clock[4].splice(r, 3, " ", " ", "*")
                clock[5].splice(r, 3, " ", " ", "*")
                clock[6].splice(r, 3, "*", "*", "*")
                break
        }
    }
    return clock
}

module.exports = drawClock