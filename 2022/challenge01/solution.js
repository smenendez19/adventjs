function wrapping(gifts) {
  return gifts.map(item => {
    const ast = "*".repeat(item.length)
    return `${ast}**\n*${item}*\n**${ast}`}
    )
}
