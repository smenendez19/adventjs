function findMissingNumbers(nums) {
  const max = Math.max(...nums);
  const output = Array.from(Array(max).keys()).slice(1);
  return output.filter((x) => !nums.includes(x));
}

module.exports = findMissingNumbers;
