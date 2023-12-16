function autonomousDrive(store, movements) {
    let i = store.findIndex(x => x.indexOf("!") !== -1)
    let j = store[i].indexOf("!")
    store[i] = store[i].substring(0, j) + "." + store[i].substring(j + 1)
    for (const mov of movements) {
        switch (mov) {
            case "R":
                if (j < store[0].length - 1 && store[i][j + 1] !== "*") j++
                break
            case "L":
                if (j > 0 && store[i][j - 1] !== "*") j--
                break
            case "D":
                if (i < store.length - 1 && store[i + 1][j] !== "*") i++
                break
            case "U":
                if (i > 0 && store[i - 1][j] !== "*") i--
                break
        }
    }
    store[i] = store[i].substring(0, j) + "!" + store[i].substring(j + 1)
    return store
}

module.exports = autonomousDrive