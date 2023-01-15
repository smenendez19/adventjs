function countHours(year, holidays) {
  return holidays.map((item) =>
    [0, 6].includes(new Date(year + "/" + item).getDay()) ? 0 : 2
  ).reduce((a, b) => a + b)
}

module.exports = countHours