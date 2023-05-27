'use strict';

const { Stack } = require('./index');

describe('Stack', () => {
  test('can successfully push onto a stack', () => {
    let stack = new Stack();
    stack.push();

    expect(stack.top.value).toEqual(1);
    expect(stack.top.next).toBeNull();
  });

  test('can successfully push multiple values onto a stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.top.value).toEqual(3);
    expect(stack.top.next.value).toEqual(2);
    expect(stack.top.next.next.value).toEqual(1);
    expect(stack.top.next.next.next).toBeNull();
  });

});
