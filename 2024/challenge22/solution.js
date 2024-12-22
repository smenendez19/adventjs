function generateGiftSets(gifts) {
  let giftSets = [];
  const combinations = (n, k) => {
    if (k === 1) {
      return n.map(i => [i]);
    }
    let combs = []
    for (let i = 0; i < n.length - k + 1; i++) {
      let h = n.slice(i, i+1)
      let t = combinations(n.slice(i+1), k - 1)

      for (let j = 0; j < t.length; j++) {
        combs.push(h.concat(t[j]))
      }
    }
    return combs
  }
  for (let i = 1; i < gifts.length + 1; i++) {
    giftSets = giftSets.concat(combinations(gifts, i))
  }
  return giftSets;
}

module.exports = generateGiftSets