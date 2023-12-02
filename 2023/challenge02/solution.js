function manufacture(gifts, materials) {
    return gifts.filter(gift => [...gift].every(c => materials.includes(c)))
}

module.exports = manufacture;