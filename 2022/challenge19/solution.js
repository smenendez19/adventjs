function sortToys(toys, positions) {
  return toys
    .map((toy, idx) => [toy, positions[idx]])
    .sort((a, b) => a[1] - b[1])
    .map(item => item[0])
}

module.exports = sortToys