function createFrame(names) {
    const longest = names.reduce((acc, x) => x.length > acc? x.length : acc, 0)
    let output = "****" + "*".repeat(longest) + "\n"
    for (const name of names) {
      output += "* " + name + " ".repeat(longest - name.length) + " *" + "\n"
    }
    output += "****" + "*".repeat(longest)
    return output
}

module.exports = createFrame