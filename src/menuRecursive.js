const menuItems = require("./menuItems");

const elementsByParentId = id => menuItems.filter(i => i.parentId === id);

function printRecursive(id = null, level = 0, output = []) {
  const items = elementsByParentId(id);
  items.sort((a, b) => a.name.localeCompare(b.name)).forEach(i => {
    if (i.isHidden) return;
    output.push('.'.repeat(level * 3 + 1) + i.name);
    printRecursive(i.id, level + 1, output);
  });
  return output;
}

module.exports = printRecursive;
