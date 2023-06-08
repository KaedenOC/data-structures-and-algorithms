'use strict';

class KaryNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

class KaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new KaryNode(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      this.root.children.push(newNode);
    }
  }
}

function fizzBuzz(tree) {
  if (!tree) {
    return null;
  }

  let traverse = (node) => {
    for (let child of node.children) {
      traverse(child);
    }

    if (node.value % 3 === 0 && node.value % 5 === 0) {
      node.value = 'FizzBuzz';
    } else if (node.value % 5 === 0) {
      node.value = 'Buzz';
    } else if (node.value % 3 === 0) {
      node.value = 'Fizz';
    }
  };

  traverse(tree.root);

  return tree;
}

module.exports = {
  KaryNode,
  KaryTree,
  fizzBuzz
};
