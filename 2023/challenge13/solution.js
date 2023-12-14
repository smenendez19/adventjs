function calculateTime(deliveries) {
    let seconds = -25200
    for (const d of deliveries) {
      const [h, m, s] = d.split(":").map(x => parseInt(x))
      seconds += h * 3600 + m * 60 + s
    }
    
    const sign = seconds < 0
    seconds = Math.abs(seconds)

    return `${sign ? "-" : ""}` +
      `${Math.trunc(seconds / 3600)}`.padStart(2, '0') + ":" +
      `${Math.trunc(seconds / 60) % 60}`.padStart(2, '0') + ":" +
      `${seconds % 60}`.padStart(2, '0')
}

module.exports = calculateTime