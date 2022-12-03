countHours = (year, holidays) => {
  let hours = 0
  holidays.forEach((item) => {
    const weekDay = new Date(year + "/" + item).getDay()
    hours = (weekDay === 0 || weekDay === 6) ? hours : hours += 2
  })
  return hours
}
