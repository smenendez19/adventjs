function detectBombs(grid) {
    let output = []
    for (let i = 0; i < grid.length; i++) {
      let arr = []
      for (let j = 0; j < grid[i].length; j++) {
        arr.push(
          [grid?.[i-1]?.[j],
          grid?.[i-1]?.[j+1],
          grid?.[i-1]?.[j-1],
          grid?.[i]?.[j+1],
          grid?.[i]?.[j-1],
          grid?.[i+1]?.[j],
          grid?.[i+1]?.[j-1],
          grid?.[i+1]?.[j+1]].filter(Boolean).length
        )
      }
      output.push(arr)
    }
    return output
  }

module.exports = detectBombs