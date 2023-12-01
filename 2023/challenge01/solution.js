function findFirstRepeated(gifts) {
  let usedGifts = new Set()
  for (const gift of gifts) {
    if (usedGifts.has(gift)) {
      return gift
    }
    usedGifts.add(gift)
  }
  return -1
}

module.exports = findFirstRepeated;