function checkJump(heights) {
    let maxIndex = heights.indexOf(Math.max(...heights))
    const heightsUp = heights.slice(0, maxIndex + 1)
    const isUp = heightsUp.slice(1).every((h, i) => h >= heightsUp[i])
    const heightsDown = heights.slice(maxIndex + 1)
    const isDown = heightsDown.slice(1).every((h, i) => h <= heightsDown[i])
    return isUp && isDown && maxIndex != 0 && heightsDown.length != 0
}

module.exports = checkJump