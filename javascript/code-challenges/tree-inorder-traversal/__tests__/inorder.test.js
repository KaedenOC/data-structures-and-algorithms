'use strict';

const { Node, BinarySearchTree} = require('../../trees/index');

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
});


