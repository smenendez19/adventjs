const findInAgenda = require("./solution");

test("Test Case 1", () => {
  expect(
    findInAgenda(
      `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`,
      "34-600-123-456"
    )
  ).toStrictEqual({ name: "Juan Perez", address: "Calle Gran Via 12" });
});

//test("Test Case 2", () => {
//  expect(
//    findInAgenda(
//      `+44-123-456-789 Main Street <Alice Smith>
//+44-123-456-789 Park Avenue <Alice Johnson>`,
//      "44-123-456-789"
//    )
//  ).toStrictEqual({ name: "Alice Johnson", address: "Park Avenue" });
//});
