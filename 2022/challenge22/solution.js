function checkStepNumbers(systemNames, stepNumbers) {
    return systemNames.every((name, idx) => 
        stepNumbers[idx] <= 
        stepNumbers[systemNames.slice(idx + 1).indexOf(name) + 1 + idx])
}

module.exports = checkStepNumbers
