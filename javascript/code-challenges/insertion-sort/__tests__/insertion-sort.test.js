'use strict';

const { insert, insertionSort } = require('../index');

describe('insert', () => {
  test('should insert a value into a sorted array at the correct position', () => {
    const sortedArray = [4, 8, 15, 23, 42];
    const value = 16;

    insert(sortedArray, value);

    expect(sortedArray).toEqual([4, 8, 15, 16, 23, 42]);
  });

  test('should insert a value at the beginning of the array if it is smaller than all other values', () => {
    const sortedArray = [4, 8, 15, 23, 42];
    const value = 1;

    insert(sortedArray, value);

    expect(sortedArray).toEqual([1, 4, 8, 15, 23, 42]);
  });

  test('should insert a value at the end of the array if it is larger than all other values', () => {
    const sortedArray = [4, 8, 15, 23, 42];
    const value = 50;

    insert(sortedArray, value);

    expect(sortedArray).toEqual([4, 8, 15, 23, 42, 50]);
  });
});

describe('insertionSort', () => {
  test('should sort the array in ascending order', () => {
    const input = [8, 4, 23, 42, 16, 15];
    const sortedArray = insertionSort(input);

    expect(sortedArray).toEqual([4, 8, 15, 16, 23, 42]);
  });

  test('should return an empty array if the input array is empty', () => {
    const input = [];
    const sortedArray = insertionSort(input);

    expect(sortedArray).toEqual([]);
  });

  test('should return the same array if the input array has only one element', () => {
    const input = [5];
    const sortedArray = insertionSort(input);

    expect(sortedArray).toEqual([5]);
  });
});
