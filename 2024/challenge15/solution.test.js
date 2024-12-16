const drawTable = require("./solution");

test("Test Case 1", () => {
    expect(drawTable([
        { name: 'Alice', city: 'London' },
        { name: 'Bob', city: 'Paris' },
        { name: 'Charlie', city: 'New York' }
      ])).toStrictEqual(
        ["+---------+----------+",
        "| Name    | City     |",
        "+---------+----------+",
        "| Alice   | London   |",
        "| Bob     | Paris    |",
        "| Charlie | New York |",
        "+---------+----------+"].join("\n")
      )
});