const printRecursive = require("../src/menuRecursive");

test("Recursive way prints menu correctly", () => {
  const result = printRecursive();
  expect(result).toContain(".Company");
  expect(result).toContain("....About Us");
  expect(result).toContain(".......Team");
  expect(result).not.toContain("....Client 4"); // hidden
});
