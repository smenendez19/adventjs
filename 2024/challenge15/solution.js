function drawTable(data) {
  const output = [];
  const keys = Object.keys(data[0]);
  const titles = {};

  for (let key of keys) {
    titles[key] = key.length;
    for (let row of data) {
      const len = String(row[key]).length;
      if (len > titles[key]) titles[key] = len;
    }
  }

  const border =
    keys
      .reduce((acc, title) => {
        return [...acc, "+--" + "-".repeat(titles[title])];
      }, [])
      .join("") + "+";

  output.push(border);

  output.push(
    keys
      .reduce((acc, title) => {
        return [
          ...acc,
          "| " +
            String(title).charAt(0).toUpperCase() +
            String(title).slice(1) +
            " ".repeat(titles[title] - title.length + 1),
        ];
      }, [])
      .join("") + "|"
  );

  output.push(border);

  for (let row of data) {
    output.push(
      keys
        .reduce((acc, title) => {
          return [
            ...acc,
            "| " +
              String(row[title]) +
              " ".repeat(titles[title] - String(row[title]).length + 1),
          ];
        }, [])
        .join("") + "|"
    );
  }

  output.push(border);

  return output.join("\n");
}

module.exports = drawTable;
