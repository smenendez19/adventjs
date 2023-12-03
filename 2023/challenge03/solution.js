function findNaughtyStep(original, modified) {
    let originalIndex = 0
    let modifiedIndex = 0
    while (originalIndex < original.length || modifiedIndex < modified.length) {
        if (original[originalIndex] !== modified[modifiedIndex]) 
        return original.length > modified.length ? 
        original[originalIndex] : modified[modifiedIndex]
        originalIndex++
        modifiedIndex++
    }
    return ''
}

module.exports = findNaughtyStep