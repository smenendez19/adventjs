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

function findFirstRepeatedWithFilter(gifts) {
  const repeated = gifts.filter((gift, i) => gifts.indexOf(gift) !== i)
  return repeated.length > 0 ? repeated[0] : -1
}

function findFirstRepeatedWithFind(gifts) {
  return gifts.find((gift, i) => gifts.indexOf(gift) !== i) ?? -1
}

module.exports = findFirstRepeatedWithFilter;