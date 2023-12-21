function findBalancedSegment(message) {
    let idxSegment = []
    let maxZerOnes = 0
    for (let i = 0; i < message.length; i++) {
      for (let j = i+1; j < message.length; j++) {
        const slice = message.slice(i, j + 1)
        const zeros = slice.filter(x => !x).length
        if (!(slice.length - (zeros * 2)) && maxZerOnes < zeros) {
          idxSegment = [i, j]
          maxZerOnes = zeros
        }
      }
    }
    return idxSegment
}

module.exports = findBalancedSegment