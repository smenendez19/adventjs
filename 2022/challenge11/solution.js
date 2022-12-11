function getCompleted(part, total) {
    const getSeconds = (time) => {
      time = time.split(":")
      return Number(time[0]*60*60) + Number(time[1]*60) + Number(time[2])
    }
    const numerator = getSeconds(part)
    const denominator = getSeconds(total)
    let divisor = denominator
    let aux1 = numerator
    while (aux1 % divisor != 0) {
        const aux2 = divisor
        divisor = aux1 % divisor
        aux1 = aux2
    }
    return `${numerator/divisor}/${denominator/divisor}`
}

module.exports = getCompleted
