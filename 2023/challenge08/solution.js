function organizeGifts(gifts) {
    const typeGifts = {}
    let countGifts = []
    for (let i = 0; i < gifts.length; i++) {
        if (/[0-9]/g.test(gifts[i])) countGifts.push(gifts[i])
        if (/[a-z]/g.test(gifts[i])) {
            typeGifts[gifts[i]] = Number(countGifts.join(""))
            countGifts = []
        }
    }

    let output = ""
    let boxes = 0
    let pales = 0
    let bag = 0

    for (const t in typeGifts) {
        pales = Math.floor(typeGifts[t] / 50)
        boxes = Math.floor(typeGifts[t] / 10) % 5
        bag = typeGifts[t] % 10

        output += `[${t}]`.repeat(pales) + `{${t}}`.repeat(boxes)
        output += "(".repeat(bag > 0)
        output += `${t.repeat(bag)}`
        output += ")".repeat(bag > 0)
    }

    return output
}

module.exports = organizeGifts