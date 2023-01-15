function getGiftsToRefill(a1, a2, a3) {
    return [...(new Set(a1.concat(a2, a3)))].filter((object) => a1.includes(object) + a2.includes(object) + a3.includes(object) < 2)
}

module.exports = getGiftsToRefill