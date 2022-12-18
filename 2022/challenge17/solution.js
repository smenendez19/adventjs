function carryGifts(gifts, maxWeight) {
    return gifts
        .reduce((bags, gift, idx) => {
            idx = bags.length - 1
            if (gift.length + bags[idx].join("").length <= maxWeight)
                bags[idx].push(gift)
            else if (gift.length <= maxWeight)
                bags.push([gift])
            return bags
        }, [[]])
        .filter(bag => bag.length > 0)
        .map(bag => bag.join(" "))
}

module.exports = carryGifts
