function fixLetter(letter) {
    return letter
        // Delete excess spaces between words
        .replace(/( {2,})/g," ")
        // Delete excess spaces in the start and end of text
        .replace(/(^ {0,})|( {1,}$)/g, "")
        // Quit excess points and marks
        .replace(/([?!.]{2,})/g, (m) => m[0])
        // Delete excess spaces between words and marks
        .replace(/ ([.?!,])/g, "$1")
        // Add a space after a mark if it's not there
        .replace(/([.,?!])(\w)/g, "$1 $2")
        // Add capital letters after points and first letter
        .replace(/\b([.?!] \w)|(^\w)/g, (m) => m.toUpperCase())
        // Find santa claus words and make them capital
        .replace(/santa claus/gi, "Santa Claus")
        // Add point in the end if it's not there
        .replace(/([^.!?])$/g, "$1.")
}

module.exports = fixLetter