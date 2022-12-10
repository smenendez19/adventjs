const checkJump = require('./solution.js');

test('Test Case 1', () => {
    expect(checkJump([1, 2, 3, 4, 5, 2, 1])).toBe(true);
  });

test('Test Case 2', () => {
    expect(checkJump([1, 2, 3])).toBe(false);
  }
);

test('Test Case 3', () => {
    expect(checkJump([1, 1, 1, 1, 1, 1, 1, 1, 2, 1])).toBe(true);
  }
);

test('Test Case 4', () => {
    expect(checkJump([1, 2, 2, 2, 1])).toBe(true);
  }
);

test('Test Case 5', () => {
    expect(checkJump([2, 2, 2, 2])).toBe(false);
  }
);
