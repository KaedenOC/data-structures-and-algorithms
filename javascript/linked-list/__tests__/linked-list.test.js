'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

describe('Linked List', () => {
  test('Can successfully instantiate an empty linked list', () => {
    const list = new LinkedList();

    expect(list.head).toBeNull();
  });
  test('Can properly insert into the linked list', () => {
    const list = new LinkedList();
    list.insert(1);

    expect(list.head.value).toEqual(1);
    expect(list.head.next).toBeNull();
  });
  test('The head property will properly point to the first node in the linked list', () => {
    const list = new LinkedList();
    list.insert(2);

    expect(list.head.value).toEqual(2);
    expect(list.head.next).toBeNull();

    // list.insert(1);
    // expect(list.head.value).toEqual(1);
    // expect(list.head.next.value).toEqual(2);
    // expect(list.head.next.next).toBeNull();
    // list.append('a');
    // expect(list.head.next.next.value).toEqual('a');

  });

  test('Can properly insert multiple nodes into the linked list', () => {
    const list = new LinkedList();
    list.append('a');
    list.append('b');
    list.append('c');

    expect(list.head.value).toEqual('a');
    expect(list.head.next.value).toEqual('b');
    expect(list.head.next.next.value).toEqual('c');
    expect(list.head.next.next.next).toBeNull();
    // list.append('a');
    // expect(list.head.next.next.next.value).toEqual('a');
  });

  test('Can properly check if a value exists in the linked list', () => {
    const list = new LinkedList();
    list.append('a');
    list.append('b');
    list.append('c');

    expect(list.includes('a')).toBe(true);
    expect(list.includes('b')).toBe(true);
    expect(list.includes('c')).toBe(true);
    expect(list.includes('d')).toBe(false);
  });

  test('Can properly convert the linked list to a string', () => {
    const list = new LinkedList();
    list.append('a');
    list.append('b');
    list.append('c');

    expect(list.toString()).toBe('{ a } -> { b } -> { c } -> NULL');
  });

  test('Can traverse the linked list and print all values', () => {
    const list = new LinkedList();
    list.append('a');
    list.append('b');
    list.append('c');
    list.traversal();
  });
});

describe('LinkedList', () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
    list.append(1);
    list.append(3);
    list.append(8);
    list.append(2);
  });

  // Test case: Where k is greater than the length of the linked list
  it('should return null when k is greater than the length of the list', () => {
    const k = 5;
    const result = list.kthFromEnd(k);
    expect(result).toBe(null);
  });

  // Test case: Where k and the length of the list are the same
  it('should return the correct value when k and the length of the list are the same', () => {
    const k = 4;
    const result = list.kthFromEnd(k);
    expect(result).toEqual(1);
  });

  // Test case: Where k is not a positive integer
  it('should return null when k is not a positive integer', () => {
    const k = -2;
    const result = list.kthFromEnd(k);
    expect(result).toBe(null);
  });

  // Test case: Where the linked list is of size 1
  it('should return the correct value when the linked list has only one node', () => {
    const singleNodeList = new LinkedList();
    singleNodeList.append('a');
    const k = 0;
    const result = singleNodeList.kthFromEnd(k);
    expect(result).toEqual('a');
  });

  // Test case: "Happy Path" where k is somewhere in the middle of the linked list
  it('should return the correct value when k is somewhere in the middle of the linked list', () => {
    const k = 2;
    const result = list.kthFromEnd(k);
    expect(result).toEqual(3);
  });
});
