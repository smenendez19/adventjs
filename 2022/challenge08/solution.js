function checkPart(part) {
    return [...part].reduce((pal, y, i) => {
        console.log(pal, y, i)
        const word = [...part].filter((_, j) => i != j)
        return word.join("") === word.reverse().join("") ? true : pal
    }, false)
}