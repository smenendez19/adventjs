function dryNumber(dry, numbers) {
    return Array.from({ length: numbers }, (_, i) => i + 1).filter(
        number => number.toString().split("").includes(dry.toString())
    )
}

module.exports = dryNumber