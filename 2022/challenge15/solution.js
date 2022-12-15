function decorateTree(base) {
    let tree = [base.split(" ")]
    const dict = {
        "PP" : "P",
        "BB" : "B",
        "RR" : "R",
        "BP" : "R",
        "PB" : "R",
        "BR" : "P",
        "RB" : "P",
        "PR" : "B",
        "RP" : "B"
    }
    tree[0].slice(1).forEach(() => {
        let row = []
        tree[0].slice(1).forEach((_, j) => {
            row.push(dict[tree[0][j] + tree[0][j + 1]])
        })
        tree.unshift(row)
    })
    return tree.map(row => row.join(" "))
}

module.exports = decorateTree