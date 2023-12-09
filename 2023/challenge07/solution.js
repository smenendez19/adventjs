function drawGift(size, symbol) {
    let output = ""

    output += " ".repeat(size - 1 > 0 ? size - 1 : 0) + "#".repeat(size) + "\n"
    if (size > 1) {
        for (let i = 0; i < size - 2; i++) {
            output +=
                " ".repeat(size - 2 - i) +
                "#" +
                symbol.repeat(size - 2) +
                "#" +
                symbol.repeat(i) +
                "#" +
                "\n"
        }
        output +=
            "#".repeat(size) +
            symbol.repeat(size - 2) +
            "#" +
            "\n"
        for (let i = size - 3; i >= 0; i--) {
            output +=
                "#" +
                symbol.repeat(size - 2) +
                "#" +
                symbol.repeat(i) +
                "#" +
                "\n"
        }
        output += "#".repeat(size) + "\n"
    }
    return output
}

module.exports = drawGift