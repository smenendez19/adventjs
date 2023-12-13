function checkIsValidCopy(original, copy) {
    const symbolConversion = {
        "a": "#",
        "#": "+",
        "+": ":",
        ":": ".",
        ".": " "
    }
    for (let i = 0; i < original.length; i++) {
        let charDeg = original[i]
        if (!charDeg.match(/[a-zA-Z#]/) && charDeg != copy[i]) return false
        if (charDeg === copy[i]) continue
        charDeg = charDeg.toLowerCase()
        if (charDeg === copy[i]) continue
        charDeg = "a"
        let isEqual = false
        do {
            charDeg = symbolConversion[charDeg]
            if (charDeg === copy[i]) {
                isEqual = true
                break
            }
        } while (charDeg != " ")
        if (!isEqual) return false
    }
    return true
}

module.exports = checkIsValidCopy