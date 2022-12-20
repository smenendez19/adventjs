// Gracias a zJaaal por una mano con la solucion

function howManyReindeers(reindeerTypes, gifts) {
  return gifts.map(gift => {
    let weights = reindeerTypes
      .filter((x) => x.weightCapacity < gift.weight)
      .sort((x, y) => y.weightCapacity - x.weightCapacity);

    let sumWeights = weights.reduce((acc, reindeer) =>
        acc + reindeer.weightCapacity, 0)

    let maxWeight = gift.weight

    let reindeers = weights.map(reindeer => {
      let divided = maxWeight / sumWeights >> 0
      sumWeights -= reindeer.weightCapacity
      maxWeight -= divided * reindeer.weightCapacity
      return {
        "type": reindeer.type,
        "num": divided
      }
    })

    return {
      "country": gift.country,
      "reindeers": reindeers
    }
  })
}

module.exports = howManyReindeers


