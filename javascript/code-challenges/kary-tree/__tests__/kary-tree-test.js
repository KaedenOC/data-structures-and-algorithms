'use strict';

const { KaryNode, KaryTree, fizzBuzz } = require('../index');

describe('fizzBuzz', () => {
  it('should replace value with "Fizz" if divisible by 3', () => {
    const tree = new KaryTree();
    const rootNode = new KaryNode(9); // Divisible by 3

    tree.root = rootNode;

    const modifiedTree = fizzBuzz(tree);

    expect(modifiedTree.root.value).toBe('Fizz');
  });

  it('should replace value with "Buzz" if divisible by 5', () => {
    const tree = new KaryTree();
    const rootNode = new KaryNode(10); // Divisible by 5

    tree.root = rootNode;

    const modifiedTree = fizzBuzz(tree);

    expect(modifiedTree.root.value).toBe('Buzz');
  });

  it('should replace value with "FizzBuzz" if divisible by both 3 and 5', () => {
    const tree = new KaryTree();
    const rootNode = new KaryNode(15); // Divisible by 3 and 5

    tree.root = rootNode;

    const modifiedTree = fizzBuzz(tree);

    expect(modifiedTree.root.value).toBe('FizzBuzz');
  });

  it('should turn the number into a string if not divisible by 3 or 5', () => {
    const tree = new KaryTree();
    const rootNode = new KaryNode(8); // Not divisible by 3 or 5

    tree.root = rootNode;

    const modifiedTree = fizzBuzz(tree);

    expect(modifiedTree.root.value).toString('8');
  });
});
