function checkJump(heights) {
    let maxIndex = heights.indexOf(Math.max(...heights))
    if (maxIndex == 0) return false
    const heightsUp = heights.slice(0, maxIndex + 1)
    const isUp = heightsUp.slice(1).every((h, i) => h >= heightsUp[i])
    const heightsDown = heights.slice(maxIndex + 1, heights.length)
    if (heightsDown.length == 0) return false
    const isDown = heightsDown.slice(1).every((h, i) => h <= heightsDown[i])
    return isUp && isDown
}

module.exports = checkJump