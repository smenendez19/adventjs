function cyberReindeer(road, time) {
    let result = []
    let timePassed = 0
    let pos = 0
    let aux = "."
    while (timePassed < time) {
        result.push(road)
        timePassed++
        if (timePassed >= 5) road = road.replace(/\|/gi, "*")
        if ([".", "*"].includes(road[pos+1])) {
            road = road.split("")
            road[pos] = aux
            aux = road[pos+1]
            road[pos+1] = "S"
            road = road.join("")
            pos++
        }
    }
    return result
}

module.exports = cyberReindeer