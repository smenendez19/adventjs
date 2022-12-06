function createCube(size) {
    let cube = []
    for (let i = size; i > 0; i--) {
        cube.unshift(`${" ".repeat(size - i)}${"/\\".repeat(i)}${"_\\".repeat(size)}`)
        cube.push(`${" ".repeat(size - i)}${"\\/".repeat(i)}${"_/".repeat(size)}`)
    }
    return cube.join("\n")
}

console.log(createCube(3))