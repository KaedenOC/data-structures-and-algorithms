'use strict';

const { HashTable} = require('../index');

describe('HashTable', () => {
  test('Setting a key/value to your hashtable results in the value being in the data structure', () => {
    const table = new HashTable(1990);
    expect(table.size).toEqual(1990);
  });

  test('Retrieving based on a key returns the value stored', () => {
    const table = new HashTable(1990);
    table.set('Kaeden', 'this is the value');
    expect(table.get('Kaeden')).toEqual('this is the value');
  });

  test('Successfully returns null for a key that does not exist in the hashtable', () => {
    const table = new HashTable(1990);
    table.set('Kaeden', 'this is the value');
    expect(table.get('Bob')).toEqual(null);
  });

  test('Successfully returns a list of all unique keys that exist in the hashtable', () => {
    const table = new HashTable(1990);
    table.set('Kaeden', 'this is the value');
    table.set('age', 26);
    expect(table.keys()).toEqual(['Kaeden', 'age']);

  });

  test('Successfully handle a collision within the hashtable', () => {
    const table = new HashTable(1990);
    table.set('Kaeden', 'this is the value');
    table.set('Nedeak', 'eulav');
    expect(table.get('Nedeak')).toEqual('eulav');
  });

  test('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    const table = new HashTable(1990);
    table.set('Kaeden', 'this is the value');
    table.set('Kaeden', 'this is the collision');
    expect(table.get('Kaeden')).toEqual('this is the collision');
  });

  // test('Successfully hash a key to an in-range value', () => {
  //   const table = new HashTable(1990);

  // })
});
