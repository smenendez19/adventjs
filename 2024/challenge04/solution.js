function createXmasTree(height, ornament) {
  let output = [];

  for (let i = 0; i < height; i++) {
    output.push(
      "_".repeat(height - i - 1) +
        ornament.repeat(i * 2 + 1) +
        "_".repeat(height - i - 1)
    );
  }

  output.push("_".repeat(height - 1) + "#" + "_".repeat(height - 1));

  output.push("_".repeat(height - 1) + "#" + "_".repeat(height - 1));

  return output.join("\n");
}

module.exports = createXmasTree