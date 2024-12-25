function isTreesSynchronized(tree1, tree2) {
  const isSync = (node1, node2) => {
    if (!node1 && !node2) {
      return true;
    }
    if (node1.value !== node2.value) {
      return false;
    }
    const valLeft = isSync(node1.left, node2.right);
    const valRight = isSync(node1.right, node2.left);
    return valLeft && valRight;
  };
  return [isSync(tree1, tree2), tree1.value];
}

module.exports = isTreesSynchronized;
