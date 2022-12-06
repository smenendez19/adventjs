function createCube(size) {
    let cubeUp = []
    let cubeDown = []
    for (let i = 0; i < size; i++) {
        cubeUp.push(`${" ".repeat(size - 1 - i)}${"/\\".repeat(i + 1)}${"_\\".repeat(size)}`)
        cubeDown.push(`${" ".repeat(size - 1 - i)}${"\\/".repeat(i + 1)}${"_/".repeat(size)}`)
    }
    return cubeUp.concat(cubeDown.reverse()).join("\n")
}
