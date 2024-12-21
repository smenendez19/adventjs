function treeHeight(tree) {
  if (!tree) return 0;
  return 1 + Math.max(treeHeight(tree.left), treeHeight(tree.right));
}

module.exports = treeHeight;
