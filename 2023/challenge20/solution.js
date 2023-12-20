function distributeGifts(weights) {
  let avgWeights = Array(weights.length)
    .fill()
    .map(() => Array(weights[0].length));
  weights.forEach((row, i) => {
    row.forEach((_, j) => {
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
    })
  })
  return avgWeights
}

module.exports = distributeGifts