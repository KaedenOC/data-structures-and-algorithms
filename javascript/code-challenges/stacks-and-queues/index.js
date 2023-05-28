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

module.exports = { Stack };
