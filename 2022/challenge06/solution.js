function createCube(size) {
    let cube = []
    Array(size).fill(0).forEach((_, i) => {
        cube.unshift(
          " ".repeat(size - (size - i)) + 
          "/\\".repeat((size - i)) + 
          "_\\".repeat(size))
        cube.push(
          " ".repeat(size - (size - i)) + 
          "\\/".repeat((size - i)) + 
          "_/".repeat(size))
    })
    return cube.join("\n")
}

module.exports = createCube