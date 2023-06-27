'use strict';


//declares the HashTable class// blueprint for creating hash table objects
class HashTable {
  constructor(size) { //determines the size of the hash table
    this.size = size; //determines represents the number of buckets the hash table will have
    this.buckets = new Array(size); //creates a new array called buckets with a length of size
    //the buckets array will store the key/value pairs in the hash table
  }

  hash(key) { //hash method is used to calculate the hash value for a given key// takes key as a parameter
    let characters = key.split(''); //splits the key string into an array of characters
    //reduce method used to iterate over the characters array and calc the sum of ASCII values
    let asciiSum = characters.reduce((sum, character) => {
      return sum + character.charCodeAt(0);
    }, 0); //second argument sets the initial value of the sum accumulator
    let initialHash = asciiSum * 599;
    return initialHash % this.size;
  }

  set(key, value) { //set method used to insert a key/value pair into the hash table.
    //hash method called with key to  calculate the position (index) where the key-value pair should be stored in the hash table.
    let position = this.hash(key);
    // data obj created with the key as the property name and the value as the property value. This object represents the key-value pair.
    let data = {[key]: value};
    //the data object is assigned to the position index of the buckets array, effectively storing the key-value pair in the hash table.
    this.buckets[position] = data;
  }

  get(key) { //The get method is used to retrieve the value associated with a given key. It takes key as a parameter.
    //Similar to the set method, the hash method is called to determine the position of the key in the hash table.
    let position = this.hash(key);
    //checks if there is a value stored at the position index in the buckets array.
    if(this.buckets[position]) {
      //If a value exists at the position, the corresponding value for the key is returned. It accesses the value using the key property of the object stored in the position.
      return this.buckets[position][key];
    } else {
      return null;
    }
  }

  has(key) { //method checks whether a given key exists in the hash table. It takes key as a parameter.
    let position = this.hash(key);
    // checks if there is a value stored at the position index in the buckets array. If a value exists, results is set to true; otherwise, it is set to false.
    let results = this.buckets[position] ? true : false;
    return results;
  }

  keys() { //method returns an array of all the keys present in the hash table.
    //reduce method is used to iterate over the buckets array and accumulate the keys in the keysArr array.
    let results = this.buckets.reduce((keysArr, bucket) => {
      // checks if a bucket (position) in the buckets array is not empty.
      if(bucket) {
        //If a bucket exists, the Object.keys method is used to retrieve the key of the object stored in the bucket, and it is added to the keysArr array.
        keysArr.push(Object.keys(bucket)[0]);
        return keysArr;
      } else {
        return keysArr;
      }
    }, []);
    return results;
  }
}




module.exports = { HashTable };
