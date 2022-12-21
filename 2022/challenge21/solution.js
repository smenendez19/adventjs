function printTable(gifts) {
    let res = []
    let maxNameLength = Math.max(...gifts.map(
        g => g.name.length), 4)
    let maxQuantityLength = Math.max(...gifts.map(
        g => g.quantity.toString().length), 8)
    res.push("+".repeat(maxNameLength + maxQuantityLength + 7))
    let nameSpaces = " ".repeat(maxNameLength - 4)
    let quantitySpaces = " ".repeat(maxQuantityLength - 8)
    res.push(`| Gift ${nameSpaces}| Quantity ${quantitySpaces}|`)
    let nameDashes = "-".repeat(maxNameLength)
    let quantityDashes = "-".repeat(maxQuantityLength)
    res.push(`| ${nameDashes} | ${quantityDashes} |`)
    gifts.forEach(gift => {
        let spacesName = " ".repeat(maxNameLength - gift.name.length)
        let spacesQuantity = " ".repeat(
            maxQuantityLength - gift.quantity.toString().length)
        res.push(
            `| ${gift.name} ${spacesName}| ${gift.quantity} ${spacesQuantity}|`)
    })
    res.push("*".repeat(maxNameLength + maxQuantityLength + 7))
    return res.join("\n")
}

module.exports = printTable
