function getOptimalPath(path) {
    const backtracking = (acc, currIdx, arrIdx) => {
        if (arrIdx === path.length) return [acc]
        let arr = []
        path[arrIdx].slice(currIdx, currIdx + 2).forEach((num, idx) => {
            arr.push(...backtracking(acc + num, idx, arrIdx + 1))
        })
        return arr
      }
    let arrRes = backtracking(0, 0, 0)
    return Math.min(...arrRes)
}

module.exports = getOptimalPath
