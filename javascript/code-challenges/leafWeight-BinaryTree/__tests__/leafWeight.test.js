'use strict';

const { BinaryTree, Node } = require('../index');
const { leafWeight } = require('../index');

function createBinaryTree() {
  const binaryTree = new BinaryTree();
  binaryTree.root = new Node(5);
  binaryTree.root.left = new Node(4);
  binaryTree.root.right = new Node(8);
  binaryTree.root.left.left = new Node(11);
  binaryTree.root.left.left.left = new Node(7);
  binaryTree.root.left.left.right = new Node(2);
  binaryTree.root.right.left = new Node(13);
  binaryTree.root.right.right = new Node(4);
  binaryTree.root.right.right.right = new Node(1);
  return binaryTree;
}

describe('leafWeight', () => {

  test('should return false if there is no leaf node path with the given sum', () => {
    const binaryTree = createBinaryTree();
    expect(leafWeight(binaryTree, 10)).toBe(false);
  });


});
