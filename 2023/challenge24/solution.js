function getStaircasePaths(steps, maxJump) {
    const output = []
    const getPaths = (s, p, j) => {
        if (s === 0) output.push(p)
        else
        for (let i = 1; i <= j && i <= s; i++)
            getPaths(s - i, [...p, i], j)
    }

    getPaths(steps, [], maxJump)
    return output
}

module.exports = getStaircasePaths