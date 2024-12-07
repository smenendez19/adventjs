function fixPackages(packages) {
    let open = packages.lastIndexOf("(");
    let close = packages.indexOf(")");
    while (close > 0 && open > 0 && open < close) {
      const backwards = packages
        .slice(open + 1, close)
        .split("")
        .reverse()
        .join("");
      packages = packages.slice(0, open) + backwards + packages.slice(close+1);
      open = packages.lastIndexOf("(");
      close = packages.indexOf(")");
    }
    return packages;
  }
  

module.exports = fixPackages;
