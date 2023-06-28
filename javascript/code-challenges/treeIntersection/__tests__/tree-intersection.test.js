'use strict';

const { HashTable, tree_intersection } = require('../tree-intersection');

test('Find common values in two binary trees', () => {
  // Create two binary trees
  const tree1 = {
    root: {
      value: 1,
      left: { value: 2, left: null, right: null },
      right: { value: 3, left: null, right: null }
    }
  };

  const tree2 = {
    root: {
      value: 3,
      left: { value: 4, left: null, right: null },
      right: { value: 5, left: null, right: null }
    }
  };

  // Expected common values: [3]
  const expectedCommonValues = new Set([3]);

  // Call the tree_intersection function
  const commonValues = tree_intersection(tree1, tree2);

  // Compare the common values with the expected values
  expect(commonValues).toEqual(expectedCommonValues);
});
