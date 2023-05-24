'use strict';


class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}


class LinkedList {
  constructor(){
    this.head = null;
  }
  //adds a node to the FRONT of a linked list
  insert(value){
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
  }
  //adds a node to the END of a linked list
  append(value){
    let node = new Node(value);
    //if head is null we need to assign this new node to the head as well
    if(!this.head){
      this.head = node;
      return;
    }
    let current = this.head;
    while(current.next){
      current = current.next;
    }
    current.next = node;
  }
  traversal(){
    let current = this.head;
    while(current){
      console.log(current.value);
      current = current.next;
    }
  }
  includes(value){
    let current = this.head;
    while(current){
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
  toString(){
    let current = this.head;
    let result = '';
    while(current){
      result += `{ ${current.value} } -> `;
      current = current.next;
    }
    result += 'NULL';
    return result;
  }

  insertBefore(value, newValue) {
    if (!this.head) {
      return; // Empty list, cannot insert before
    }
    if (this.head.value === value) {
      // Insert before the head node
      let newNode = new Node(newValue);
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.value === value) {
        let newNode = new Node(newValue);
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }
  }

  insertAfter(value, newValue) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        let newNode = new Node(newValue);
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }
  }

  kthFromEnd(k) {
    if (k < 0 || !Number.isInteger(k) || this.head === null) {
      return null;
    }

    let slow = this.head;
    let fast = this.head;

    for (let i = 0; i <= k; i++) {
      if (fast === null) {
        return null;
      }
      fast = fast.next;
    }

    while (fast !== null) {
      slow = slow.next;
      fast = fast.next;
    }

    return slow.value;
  }

}



let list = new LinkedList();
list.append('a');
list.append('b');
list.append('c');
console.log(list);

module.exports = LinkedList;
