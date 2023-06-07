'use strict';

const { Tree, Node } = require('../index');

describe('breadthFirst', () => {
  test('returns an empty array for an empty tree', () => {
    const tree = new Tree();
    const result = tree.breadthFirst(tree.root);
    expect(result).toEqual([]);
  });

  test('returns the values in the tree in breadth-first order', () => {
    const tree = new Tree();
    tree.root = new Node(2);
    tree.root.left = new Node(7);
    tree.root.right = new Node(5);
    tree.root.left.left = new Node(2);
    tree.root.left.right = new Node(6);
    tree.root.right.right = new Node(9);
    tree.root.left.right.left = new Node(5);
    tree.root.left.right.right = new Node(11);
    tree.root.right.right.left = new Node(4);

    const result = tree.breadthFirst(tree.root);
    expect(result).toEqual([2, 7, 5, 2, 6, 9, 5, 11, 4]);
  });

  test('handles a tree with a single node', () => {
    const tree = new Tree();
    tree.root = new Node(2);

    const result = tree.breadthFirst(tree.root);
    expect(result).toEqual([2]);
  });

  test('handles a tree with multiple levels', () => {
    const tree = new Tree();
    tree.root = new Node(2);
    tree.root.left = new Node(7);
    tree.root.right = new Node(5);
    tree.root.left.left = new Node(2);
    tree.root.left.right = new Node(6);
    tree.root.right.right = new Node(9);
    tree.root.left.right.left = new Node(5);
    tree.root.left.right.right = new Node(11);
    tree.root.right.right.left = new Node(4);
    tree.root.right.right.left.left = new Node(8);

    const result = tree.breadthFirst(tree.root);
    expect(result).toEqual([2, 7, 5, 2, 6, 9, 5, 11, 4, 8]);
  });
});
