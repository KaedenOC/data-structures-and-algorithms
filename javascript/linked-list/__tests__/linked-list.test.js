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
