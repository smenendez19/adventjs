function countHours(year, holidays) {
  return holidays.map((item) => {
    const weekDay = new Date(year + "/" + item).getDay()
    return (weekDay === 0 || weekDay === 6) ? 0 : 2
  }).reduce((a, b) => a + b)
}