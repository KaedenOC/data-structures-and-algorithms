'use strict';

const { PseudoQueue } = require('../index');

describe('PseudoQueue', () => {

  test('enqueue and dequeue elements', () => {
    let queue = new PseudoQueue();

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
  });
});
