function decode(message) {
    while (1) {
        const nestedFinal = message.indexOf(")")
        const nestedStart = message.substring(0, nestedFinal).lastIndexOf("(")
        if (nestedStart == -1 || nestedFinal == -1) break
        message = message.substring(0, nestedStart) + 
        message
          .substring(nestedStart + 1, nestedFinal)
          .split("")
          .reverse()
          .join("") + 
        message.substring(nestedFinal + 1, message.length)
    }
    return message
}

module.exports = decode
