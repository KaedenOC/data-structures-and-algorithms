'use strict';

const { mergeSort } = require('../index');

describe('mergeSort', () => {
  it('should sort the array in ascending order', () => {
    const arr = [8, 4, 23, 42, 16, 15];
    mergeSort(arr);
    expect(arr).toEqual([4, 8, 15, 16, 23, 42]);
  });

  it('should sort an empty array', () => {
    const arr = [];
    mergeSort(arr);
    expect(arr).toEqual([]);
  });

  it('should sort an array with a single element', () => {
    const arr = [5];
    mergeSort(arr);
    expect(arr).toEqual([5]);
  });

  it('should handle an already sorted array', () => {
    const arr = [1, 2, 3, 4, 5];
    mergeSort(arr);
    expect(arr).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle an array with duplicate elements', () => {
    const arr = [5, 2, 1, 4, 2, 3, 1];
    mergeSort(arr);
    expect(arr).toEqual([1, 1, 2, 2, 3, 4, 5]);
  });
});
