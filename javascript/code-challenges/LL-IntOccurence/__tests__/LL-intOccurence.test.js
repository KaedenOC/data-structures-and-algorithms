const intOccurence = require('../index');
const { LinkedList } = require('../../../linked-list/index');

describe('Integer Occurences', () => {
  test('Count occurrences of key in linked list with multiple occurrences', () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(1);
    linkedList.append(3);
    linkedList.append(1);

    const key = 1;
    const occurrences = intOccurence(linkedList, key);

    expect(occurrences).toBe(4);
  });

  test('Count occurrences of key in linked list with no occurrence', () => {
    const linkedList = new LinkedList();
    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(4);
    linkedList.append(5);

    const key = 1;
    const occurrences = intOccurence(linkedList, key);

    expect(occurrences).toBe(0);
  });
});

