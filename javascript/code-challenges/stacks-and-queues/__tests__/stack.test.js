'use strict';

const { Stack } = require('../index');

describe('Stack', () => {
  test('Can successfully push onto a stack', () => {
    let stack = new Stack();
    stack.push(1);

    expect(stack.top.value).toEqual(1);
    expect(stack.top.next).toBeNull();
  });

  test('Can successfully push multiple values onto a stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.top.value).toEqual(3);
    expect(stack.top.next.value).toEqual(2);
    expect(stack.top.next.next.value).toEqual(1);
    expect(stack.top.next.next.next).toBeNull();
  });

  test('Can successfully pop off the stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);

    expect(stack.top.value).toEqual(2);
    expect(stack.top.next.value).toEqual(1);
    expect(stack.top.next.next).toBeNull();

    stack.pop();

    expect(stack.top.value).toEqual(1);
    expect(stack.top.next).toBeNull();

  });

  test('Can successfully empty a stack after multiple pops', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);

    expect(stack.top.value).toEqual(2);
    expect(stack.top.next.value).toEqual(1);
    expect(stack.top.next.next).toBeNull();

    stack.pop();

    expect(stack.top.value).toEqual(1);
    expect(stack.top.next).toBeNull();
    stack.pop();
    expect(stack.top).toBeNull();

  });

  

});
