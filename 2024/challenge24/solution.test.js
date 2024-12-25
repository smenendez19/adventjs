const isTreesSynchronized = require("./solution");

const tree1 = {
    value: '🎄',
    left: { value: '⭐' },
    right: { value: '🎅' }
  }
  
  const tree2 = {
    value: '🎄',
    left: { value: '🎅' },
    right: { value: '⭐' }
  }

test("Test Case 1", () => {
  expect(isTreesSynchronized(tree1, tree2)).toStrictEqual([true, '🎄']);
});
