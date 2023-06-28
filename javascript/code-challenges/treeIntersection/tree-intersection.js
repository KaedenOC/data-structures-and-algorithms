'use strict';

const { HashTable } = require('../hash-table/index');
const { Tree } =  require('../trees/index');

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

module.exports = { HashTable, repeatedWords, tree_intersection, };
