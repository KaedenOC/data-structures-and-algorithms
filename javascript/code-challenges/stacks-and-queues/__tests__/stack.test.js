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

  test('Can successfully peek the next item on the stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);

    expect(stack.top.value).toEqual(2);
    expect(stack.top.next.value).toEqual(1);
    expect(stack.top.next.next).toBeNull();
    expect(stack.peek()).toEqual(2);
  });

  test('Can successfully instantiate an empty stack', () => {
    let stack = new Stack();

    expect(stack.top).toBeNull();
  });

  test('Calling pop or peek on empty stack raises exception', () => {
    let stack = new Stack();

    expect(() => stack.pop()).toThrow('Exception: cant call pop on empty stack');
    expect(() => stack.peek()).toThrow('Exception: cant call peek on empty stack');
  });

});
