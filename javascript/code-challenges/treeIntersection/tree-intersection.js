'use strict';

const { HashTable } = require('../hash-table/index');

function tree_intersection(tree1, tree2) {
  let hashTable = new HashTable(100);
  let commonValues = new Set();

  // Helper function to traverse the tree and store values in the hash table
  function traverse(node) {
    if (node) {
      hashTable.set(node.value, true);
      traverse(node.left);
      traverse(node.right);
    }
  }

  // Traverse the first tree and store values in the hash table
  traverse(tree1.root);

  // Helper function to traverse the second tree and find common values
  function traverseAndFindCommon(node) {
    if (node) {
      if (hashTable.has(node.value)) {
        commonValues.add(node.value);
      }
      traverseAndFindCommon(node.left);
      traverseAndFindCommon(node.right);
    }
  }

  // Traverse the second tree and find common values
  traverseAndFindCommon(tree2.root);

  return commonValues;
}

function repeatedWords(str) {
  let arr = str.split(' ');
  let repeatedWord = null;

  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];

    if (arr.indexOf(word) !== i) {
      // Found a repeated word
      repeatedWord = word;
      break;
    }
  }

  return repeatedWord;
}

module.exports = { HashTable, repeatedWords, tree_intersection, };
