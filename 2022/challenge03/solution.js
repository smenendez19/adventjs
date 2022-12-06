function distributeGifts(a, b) {
    return Math.floor(b.join("").length * 2 / a.join("").length)
}