'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  push(value) {
    let newNode = new Node (value);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    let removedValue = null;
    if (this.top) {
      removedValue = this.top.value;
      this.top = this.top.next;
      return removedValue;
    } else if (!this.top) {
      throw new Error('Exception: cant call pop on empty stack');
    }
  }

  peek() {
    if (!this.top) {
      throw new Error('Exception: cant call peek on empty stack');
    }
    return this.top.value;
  }

  isEmpty() {
    return this.top === null;
  }
}


class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value) {
    while (!this.stack1.isEmpty()) {
      this.stack2.push(this.stack1.pop());
    }
    this.stack1.push(value);
    while (!this.stack2.isEmpty()) {
      this.stack1.push(this.stack2.pop());
    }
  }

  dequeue() {
    return this.stack1.pop();
  }
}


module.exports = { Stack, PseudoQueue };
