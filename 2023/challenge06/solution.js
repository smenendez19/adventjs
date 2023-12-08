function maxDistance(movements) {
    let left = 0
    let right = 0
    let ast = 0
    movements.split("").forEach(x => {
      if ("<" == x) left++
      else if (">" == x) right++
      else ast++
    })
    return left > right ? left + ast - right : right + ast - left
}

module.exports = maxDistance