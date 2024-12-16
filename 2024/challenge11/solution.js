function decodeFilename(filename) {
  return filename
    .split("_")
    .slice(1)
    .join("_")
    .split(".")
    .slice(0, 2)
    .join(".");
}

module.exports = decodeFilename;
