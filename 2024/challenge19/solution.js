function distributeWeight(weight) {
  const boxRepr = {
    1: [" _ ", "|_|"],
    2: [" ___ ", "|___|"],
    5: [" _____ ", "|     |", "|_____|"],
    10: [" _________ ", "|         |", "|_________|"],
  };
  const decimals = Object.keys(boxRepr);
  let boxes = [];
  let output = [];
  while (weight > 0) {
    const decimal = decimals.findLast((x) => x <= weight);
    boxes = boxes.concat(Array(Math.floor(weight / decimal)).fill(decimal));
    weight = weight % decimal;
  }
  output = boxRepr[boxes[0]];
  for (const box of boxes.slice(1)) {
    const newBox = boxRepr[box];
    const remainBox = output[0].slice(newBox[newBox.length - 1].length).trim();
    const combBoxes = newBox[newBox.length - 1] + remainBox;
    output = newBox
      .slice(0, newBox.length - 1)
      .concat(combBoxes, output.slice(1));
  }
  return output.join("\n");
}

module.exports = distributeWeight;
