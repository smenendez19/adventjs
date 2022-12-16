function decorateTree(base) {
    let tree = [base.split(" ")]
    const dict = {
        "PP": "P",
        "BB": "B",
        "RR": "R",
        "BP": "R",
        "PB": "R",
        "BR": "P",
        "RB": "P",
        "PR": "B",
        "RP": "B"
    }
    Array(base.split(" ").length - 1).fill().forEach(() =>
        tree.unshift(
            tree[0].slice(1).map((_, j) =>
                dict[tree[0][j] + tree[0][j + 1]])))
    return tree.map(row => row.join(" "))
}

module.exports = decorateTree