function fixGiftList(received, expected) {
  const expectedMap = {};
  const missing = {};
  const extra = {};
  expected.forEach((elem) => {
    expectedMap[elem] = (expectedMap[elem] || 0) + 1;
  });
  received.forEach((elem) => {
    if (expectedMap[elem]) {
      expectedMap[elem] -= 1;
    } else {
      extra[elem] = (extra[elem] || 0) + 1;
    }
  });
  expected.forEach((elem) => {
    if (expectedMap[elem] && expectedMap[elem] > 0) {
      missing[elem] = expectedMap[elem];
    }
  });
  return {
    missing: missing,
    extra: extra,
  };
}

module.exports = fixGiftList;
