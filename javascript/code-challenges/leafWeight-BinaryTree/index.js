'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
}

function leafWeight(binaryTree, integer) {
  let temp = 0;

  function traverse(node) {
    temp += node.value;

    if (node.left) {
      traverse(node.left);
    }

    if (node.right) {
      traverse(node.right);
    }

    if (!node.left && !node.right) {
      if (temp === integer) {
        return true;
      }
    }

    temp -= node.value;
    return false;
  }

  return traverse(binaryTree.root);
}

module.exports = { BinaryTree, Node, leafWeight };
