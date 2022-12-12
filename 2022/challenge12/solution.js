function selectSleigh(distance, sleighs) {
    const bestSleigh = sleighs.filter(item => item.consumption * distance <= 20)
    return bestSleigh.length ? bestSleigh.at(-1).name : null
}

module.exports = selectSleigh
