function checkPart(part) {
    if (part === part.split("").reverse().join("")) return true
    return [...part].some((_, i) => {
        const word = [...part]
        word.splice(i, 1)
        return word.join("") === word.reverse().join("")
    })
}

module.exports = checkPart