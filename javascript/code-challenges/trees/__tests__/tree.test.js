'use strict';

const { Node, BinarySearchTree, Tree } = require('../index');

describe('Binary Search Tree', () => {
  let bst;

  beforeEach(() => {
    bst = new BinarySearchTree();
  });

  test('Can successfully instantiate an empty tree', () => {
    expect(bst.root).toBeNull();
  });

  test('Can successfully instantiate a tree with a single root node', () => {
    bst.add(10);
    expect(bst.root).toBeInstanceOf(Node);
    expect(bst.root.value).toBe(10);
  });

  test('For a Binary Search Tree, can successfully add a left child and right child properly to a node', () => {
    bst.add(10);
    bst.add(5);
    bst.add(15);
    expect(bst.root.left).toBeInstanceOf(Node);
    expect(bst.root.right).toBeInstanceOf(Node);
    expect(bst.root.left.value).toBe(5);
    expect(bst.root.right.value).toBe(15);
  });

  test('Can successfully return a collection from a pre-order traversal', () => {
    bst.add(10);
    bst.add(5);
    bst.add(15);
    bst.add(3);
    bst.add(7);
    bst.add(12);
    bst.add(17);
    expect(bst.preOrder()).toEqual([10, 5, 3, 7, 15, 12, 17]);
  });

  test('Can successfully return a collection from an in-order traversal', () => {
    bst.add(10);
    bst.add(5);
    bst.add(15);
    bst.add(3);
    bst.add(7);
    bst.add(12);
    bst.add(17);
    expect(bst.inOrder()).toEqual([3, 5, 7, 10, 12, 15, 17]);
  });

  test('Can successfully return a collection from a post-order traversal', () => {
    bst.add(10);
    bst.add(5);
    bst.add(15);
    bst.add(3);
    bst.add(7);
    bst.add(12);
    bst.add(17);
    expect(bst.postOrder()).toEqual([3, 7, 5, 12, 17, 15, 10]);
  });

  test('Returns true/false for the contains method, given an existing or non-existing node value', () => {
    bst.add(10);
    bst.add(5);
    bst.add(15);
    expect(bst.containsValue(10)).toBe(true);
    expect(bst.containsValue(5)).toBe(true);
    expect(bst.containsValue(15)).toBe(true);
    expect(bst.containsValue(20)).toBe(false);
    expect(bst.containsValue(7)).toBe(false);
  });
});

describe('Tree', () => {

  test(`Can successfully instantiate an empty tree`, () => {
    let tree = new Tree();
    expect(tree.root).toBeNull();
  });

  test('Can successfully find the maximum value in the tree', () => {
    const tree = new Tree();
    tree.root = new Node(2);
    tree.root.left = new Node(5);
    tree.root.right = new Node(9);
    tree.root.left.left = new Node(4);
    tree.root.left.right = new Node(7);
    tree.root.right.right = new Node(6);
    tree.root.right.right.left = new Node(11);
    tree.root.right.right.right = new Node(5);
    tree.root.right.right.right.left = new Node(2);

    expect(tree.findMaxValue()).toBe(11);
  });
});
