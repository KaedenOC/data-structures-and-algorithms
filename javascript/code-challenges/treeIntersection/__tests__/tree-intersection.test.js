'use strict';

const { HashTable, tree_intersection } = require('../tree-intersection');
const { Tree, Node } =  require('../../trees/index');

test('Find common values in two binary trees', () => {
  // Create two binary trees
  const tree1 = new Tree();
  tree1.root = new Node('150');
  tree1.root.left = new Node('100');
  tree1.root.right = new Node('250');
  tree1.root.left.left = new Node('75');
  tree1.root.left.right = new Node('160');
  tree1.root.right.left = new Node('200');
  tree1.root.right.right = new Node('350');
  tree1.root.left.right.left = new Node('125');
  tree1.root.left.right.right = new Node('175');
  tree1.root.right.right.left = new Node('300');
  tree1.root.right.right.right = new Node('500');

  const tree2 = new Tree();
  tree2.root = new Node('42');
  tree2.root.left = new Node('100');
  tree2.root.right = new Node('600');
  tree2.root.left.left = new Node('15');
  tree2.root.left.right = new Node('160');
  tree2.root.right.left = new Node('200');
  tree2.root.right.right = new Node('350');
  tree2.root.left.right.left = new Node('125');
  tree2.root.left.right.right = new Node('175');
  tree2.root.right.right.left = new Node('4');
  tree2.root.right.right.right = new Node('500');

  // Expected common values: [100, 160, 200, 125, 175, 350, 500]
  const expectedCommonValues = new Set(['100', '160', '200', '125', '175', '350', '500']);

  // Call the tree_intersection function
  const commonValues = tree_intersection(tree1, tree2);

  // Compare the common values with the expected values
  expect(commonValues).toEqual(expectedCommonValues);
});
