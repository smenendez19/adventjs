function calculatePrice(ornaments) {
  const keys = {
    "*": 1,
    o: 5,
    "^": 10,
    "#": 50,
    "@": 100,
  };

  let sum = 0;
  for (let i = 0; i < ornaments.length; i++) {
    if (keys[ornaments[i]] === undefined) {
      return undefined;
    }
    if (keys[ornaments[i + 1]] > keys[ornaments[i]]) {
      sum -= keys[ornaments[i]];
    } else {
      sum += keys[ornaments[i]];
    }
  }

  return sum;
}

module.exports = calculatePrice;
