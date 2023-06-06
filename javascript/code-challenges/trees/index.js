'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    const results = [];

    const traverse = (node) => {
      results.push(node.value);

      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    };
    traverse(this.root);
    return results;
  }

  inOrder() {
    const results = [];

    const traverse = (node) => {

      if (node.left) {
        traverse(node.left);
      }
      results.push(node.value);
      if (node.right) {
        traverse(node.right);
      }
    };
    traverse(this.root);
    return results;
  }

  postOrder() {
    const results = [];

    const traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      results.push(node.value);
    };
    traverse(this.root);
    return results;
  }

}

class BinarySearchTree extends Tree {
  constructor() {
    super();
  }

  add(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    const insert = (node) => {
      if (value < node.value) {
        if (node.left === null) {
          node.left = newNode;
          return this;
        } else if (node.left !== null) {
          return insert(node.left);
        }
      } else if (value > node.value) {
        if (node.right === null) {
          node.right = newNode;
          return this;
        } else if (node.right !== null) {
          return insert(node.right);
        }
      } else {
        return null;
      }
    };
    insert(this.root);
  }

  containsValue(value) {
    if (this.root === null) {
      return false;
    }

    let current = this.root;
    let found = false;

    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) {
      return false;
    }
    return true;
  }

}

module.exports = {
  Node,
  Tree,
  BinarySearchTree
};
