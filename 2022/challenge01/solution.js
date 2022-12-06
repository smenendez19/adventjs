function wrapping(gifts) {
  return gifts.map(item => `${"*".repeat(item.length)}**\n*${item}*\n**${"*".repeat(item.length)}`)
}
