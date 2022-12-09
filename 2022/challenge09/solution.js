// Solucion normal (60)
function countTime(leds) {
    let time = 0
    while (leds.includes(0)) {
        time++
        leds = leds.map((led, i) => {
        if ( i === 0 && leds[leds.length - 1] === 1) return 1
        else if (leds[i - 1] === 1) return 1
        return led
        })
    }
    return time * 7
}

// Solucion con splits (300)
function countTime(leds) {
    leds = leds.join("").split(1)
    leds[0] += leds.splice(-1)
    return Math.max(...leds.map(item => item.length)) * 7
}

