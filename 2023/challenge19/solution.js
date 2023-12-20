function revealSabotage(store) {
  const neighbors = [[-1, 0], [1, 0], [0, -1], [0, 1], 
  [-1, -1], [-1, 1], [1, -1], [1, 1]]
  store.forEach((row, i) => {
    row.forEach((_, j) => {
      if (store[i][j] !== "*") {
        const count = neighbors
          .reduce((acc, [x, y]) =>
            store[i + x]?.[j + y] === "*" ? acc + 1 : acc, 0)
        store[i][j] = count ? count.toString() : " "
      }
    })
  })
  return store
}

module.exports = revealSabotage