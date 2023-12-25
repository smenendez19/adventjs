function travelDistance(map) {
    const pos = {}
    let x = 0
    let distance = 0

    for (let line of map.split('\n')) {
        for (let i of ["S", 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
            line.includes(i) ? pos[i] = [x, line.indexOf(i)] : null
        }
        x++
    }

    pos[0] = pos["S"]
    delete pos["S"]

    for(let i = 0; i < Object.keys(pos).length - 1; i++) {
        distance += Math.abs(pos[i][0] - pos[i+1][0]) + 
            Math.abs(pos[i][1] - pos[i+1][1])
    }

    return distance
}

module.exports = travelDistance