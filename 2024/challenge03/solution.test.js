const organizeInventory = require("./solution");

test("Test Case 1", () => {
  expect(organizeInventory( [
    { name: 'book', quantity: 10, category: 'education' },
    { name: 'book', quantity: 5, category: 'education' },
    { name: 'paint', quantity: 3, category: 'art' }
  ])).toStrictEqual(
    {
        "education": {
            "book": 15
        },
        "art": {
            "paint": 3
        }
    }
  );
});
