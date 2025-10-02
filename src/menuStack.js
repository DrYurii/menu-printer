const menuItems = require("./menuItems");

const printStack = () => {
  const map = {}
  const roots = []

  menuItems.forEach(item => {
    if (!item.isHidden) {
      map[item.id] = { ...item, children: [] };
    }
  });

  Object.values(map).forEach(item => {
    if (item.parentId === null) {
      roots.push(item);
    } else if (map[item.parentId]) {
      map[item.parentId].children.push(item);
    }
  });

  const output = []
  const stack = roots
    .sort((a, b) => a.name.localeCompare(b.name))
    .reverse()
    .map(node => ({ node, level: 0 }));

  while (stack.length > 0) {
    const { node, level } = stack.pop();
    output.push('.'.repeat(level * 3 + 1) + node.name);

    node.children
      .sort((a, b) => b.name.localeCompare(a.name))
      .forEach(child => 
        stack.push({ node: child, level: level + 1 })
      );
  }

  return output;
}

module.exports = printStack;
