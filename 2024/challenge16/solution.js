function removeSnow(s) {
  return s
    .split("")
    .reduce((path, elem) => {
      if (path[path.length - 1] == elem) {
        return [...path.slice(0, path.length - 1)];
      }
      return [...path, elem];
    }, [])
    .join("");
}

module.exports = removeSnow;
