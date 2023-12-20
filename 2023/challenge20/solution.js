function distributeGifts(weights) {
  const r = weights.length
  const c = weights[0].length
  let avgWeights = Array(r).fill().map(() => Array(c));
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      const gifts = [
        weights[i  -1]?.[j],
        weights[i + 1]?.[j],
        weights[i]?.[j + -1],
        weights[i]?.[j + 1],
        weights[i]?.[j]
      ].filter(n => !!n)
      let sum = 0
      gifts.map(n => sum+= n)
      avgWeights[i][j] = Math.round(sum / gifts.length)
    }
  }
  return avgWeights
}

module.exports = distributeGifts