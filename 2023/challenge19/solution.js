function revealSabotage(store) {
  const r = store.length
  const c = store[0].length
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (store[i][j] !== "*") continue
      for (const [x, y] of [[-1, 0], [1, 0], [0, -1], [0, 1],
      [-1, -1], [-1, 1], [1, -1], [1, 1]]) {
        if (store[i + x]?.[j + y] === " ") store[i + x][j + y] = "1"
        else if (/^[0-9]*$/.test(store[i + x]?.[j + y]))
          store[i + x][j + y] = (parseInt(store[i + x][j + y]) + 1).toString()
      }
    }
  }
  return store
}

module.exports = revealSabotage