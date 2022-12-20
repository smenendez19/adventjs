// Gracias a zJaaal por la solucion

function howManyReindeers(reindeerTypes, gifts) {
  let countriesReindeers = []
  gifts.forEach(gift => {

    let weights = reindeerTypes
      .filter((x) => x.weightCapacity < gift.weight)
      .sort((x, y) => y.weightCapacity - x.weightCapacity);

    let sumWeights = weights.reduce((acc, reindeer) =>
      reindeer.weightCapacity < gift.weight ?
        acc += reindeer.weightCapacity :
        acc + 0, 0)

    let maxWeight = gift.weight

    let reindeers = weights.map(reindeer => {
      let divided = maxWeight / sumWeights >> 0
      sumWeights -= reindeer.weightCapacity
      maxWeight -= divided * reindeer.weightCapacity
      return {
        "type": reindeer.type,
        "num": Math.round(divided)
      }
    })

    countriesReindeers.push({
      "country": gift.country,
      "reindeers": reindeers
    })
  })
  return countriesReindeers
}

const res = howManyReindeers([
  { type: 'Nuclear', weightCapacity: 50 },
  { type: 'Electric', weightCapacity: 10 },
  { type: 'Gasoline', weightCapacity: 5 },
  { type: 'Diesel', weightCapacity: 1 }
], [
  { country: 'Spain', weight: 30 },
  { country: 'France', weight: 17 },
  { country: 'Italy', weight: 50 }
])

