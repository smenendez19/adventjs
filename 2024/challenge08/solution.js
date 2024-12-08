function drawRace(indices, length) {
  return indices
    .map((idx, i) => {
      let line = "~".repeat(length).split("");
      if (idx > 0) line[idx] = "r";
      else if (idx < 0) line[idx + length] = "r";
      return (
        " ".repeat(indices.length - i - 1) + line.join("") + " /" + (i + 1)
      );
    })
    .join("\n");
}

module.exports = drawRace;
