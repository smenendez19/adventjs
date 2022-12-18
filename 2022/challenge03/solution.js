function distributeGifts(packOfGifts, reindeers) {
  return Math.floor(
      reindeers.reduce((acc, item) => acc + item.length, 0) * 2 /
      packOfGifts.reduce((acc, item) => acc + item.length, 0))
}