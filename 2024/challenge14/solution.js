function minMovesToStables(reindeer, stables) {
  let sum = 0;
  for (let i = 0; i < reindeer.length; i++) {
    let minMoves = Math.abs(reindeer[i] - stables[0]);
    let minStable = 0;
    for (let j = 1; j < stables.length; j++) {
      const move = Math.abs(reindeer[i] - stables[j]);
      if (minMoves > move) {
        minMoves = move;
        minStable = j;
      }
    }
    stables.splice(minStable, 1);
    sum += minMoves;
  }
  return sum;
}

module.exports = minMovesToStables;
