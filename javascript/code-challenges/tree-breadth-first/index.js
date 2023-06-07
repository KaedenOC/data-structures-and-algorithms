'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }


  breadthFirst(tree) {
    if (!tree) {
      return [];
    }

    let result = [];
    let queue = [];
    queue.push(tree);

    while (queue.length > 0) {
      let node = queue.shift();
      result.push(node.value);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }
    return result;
  }
}

module.exports = { Tree, Node };
