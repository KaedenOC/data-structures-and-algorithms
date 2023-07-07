'use strict';


function intOccurence(list, key){

  let current = list.head;
  let count = 0;

  while(current !== null) {
    if(current.value === key) {
      count++;
    }
    current = current.next;
  }
  return count;
}

module.exports = intOccurence;
