function checkPart(part) {
    return [...part].reduce((pal, _, i) => {
        // Devuelve el array quitando una letra
        const word = [...part].filter((_, j) => i != j)
        // Suma cada booleano
        return pal += word.join("") === word.reverse().join("")
    }, 0) > 0
}
