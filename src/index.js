const printRecursive = require("./menuRecursive");
const printStack = require("./menuStack");

console.log("=== Recursive Solution ===");
console.log(printRecursive().join("\n"));

console.log("\n=== Stack Solution ===");
console.log(printStack().join("\n"));
