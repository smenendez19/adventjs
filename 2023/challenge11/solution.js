function getIndexsForPalindrome(word) {
  const isPalindrome = (x) => x === x.split("").reverse().join("")
  if (isPalindrome(word)) return []
  for (let i = 0; i < word.length - 1; i++) {
    for (let j = i+1; j < word.length; j++) {
      let newWord = word.split("")
      newWord.splice(i, 1, word[j])
      newWord.splice(j, 1, word[i])
      if (isPalindrome(newWord.join(""))) return [i, j]
    }
  }
  return null
}

module.exports = getIndexsForPalindrome
