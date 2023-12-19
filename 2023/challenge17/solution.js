function optimizeIntervals(intervals) {
  let output = []
  intervals = intervals.sort((x, y) => x[0] - y[0])
  let currInterval = [intervals[0][0], intervals[0][1]]
  for (const interval of intervals.slice(1)) {
    if (interval[0] > currInterval[1]) {
      output.push(currInterval)
      currInterval = [interval[0], interval[1]]
    }
    if (interval[1] > currInterval[1]) currInterval[1] = interval[1]
  }
  output.push(currInterval)

  return output
}

module.exports = optimizeIntervals