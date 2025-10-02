const printStack = require("../src/menuStack");

test("Stack way prints menu correctly", () => {
  const result = printStack();
  expect(result).toContain(".Prices");
  expect(result).toContain(".References");
  expect(result).toContain("....Client 1");
  expect(result).not.toContain("....Client 4");
});
