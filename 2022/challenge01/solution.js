wrapping = (gifts) => {
    return gifts.map(item => {
      const ast = "*".repeat(item.length + 2)
      return `${ast}\n*${item}*\n${ast}`
      })
  }
  