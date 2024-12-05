function organizeShoes(shoes) {
  const pairs = {};
  const output = [];
  for (const shoe of shoes) {
    if (shoe["size"] in pairs && pairs[shoe["size"]] != shoe["type"]) {
      output.push(shoe["size"]);
      delete pairs[shoe["size"]];
    } else {
      pairs[shoe["size"]] = shoe["type"];
    }
  }
  return output;
}

module.exports = organizeShoes;
