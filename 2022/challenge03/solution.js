function distributeGifts(packOfGifts, reindeers) {
    const reindersWeight = reindeers.join("").length * 2
    return Math.floor(reindersWeight / packOfGifts.join("").length)
  }