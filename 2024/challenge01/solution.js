function prepareGifts(gifts) {
    let output = new Set()
    for (const gift of gifts) output.add(gift)
    return Array.from(output).sort((a, b) => a - b)
}

module.exports = prepareGifts