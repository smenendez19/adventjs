function transformTree(tree) {
    const getNode = (i) => {
      return tree[i] != null? {
        "value":tree[i],
        "left":getNode(i*2+1),
        "right":getNode(i*2+2)
      } : null
    }
    const objTree = getNode(0)
    return objTree
}

module.exports = transformTree