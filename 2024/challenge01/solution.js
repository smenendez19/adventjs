function prepareGifts(gifts) {
    return Array.from(new Set(gifts)).sort((a, b) => a - b)
}

module.exports = prepareGifts