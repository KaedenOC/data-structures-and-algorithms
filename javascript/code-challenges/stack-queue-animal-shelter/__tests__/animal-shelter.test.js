const { AnimalShelter, Animal } = require('../index');

describe('AnimalShelter', () => {
  let shelter;

  beforeEach(() => {
    shelter = new AnimalShelter();
  });

  test('Enqueue dogs and cats', () => {
    const dog = new Animal('dog', 'Buddy');
    const cat = new Animal('cat', 'Whiskers');

    shelter.enqueue(dog);
    shelter.enqueue(cat);

    expect(shelter.dogQueue.length).toBe(1);
    expect(shelter.dogQueue[0]).toEqual(dog);
    expect(shelter.catQueue.length).toBe(1);
    expect(shelter.catQueue[0]).toEqual(cat);
  });

  test('Dequeue a dog', () => {
    const dog1 = new Animal('dog', 'Buddy');
    const dog2 = new Animal('dog', 'Max');
    shelter.enqueue(dog1);
    shelter.enqueue(dog2);

    const dequeuedDog = shelter.dequeue('dog');

    expect(dequeuedDog).toEqual(dog1);
    expect(shelter.dogQueue.length).toBe(1);
    expect(shelter.dogQueue[0]).toEqual(dog2);
  });

  test('Dequeue a cat', () => {
    const cat1 = new Animal('cat', 'Whiskers');
    const cat2 = new Animal('cat', 'Mittens');
    shelter.enqueue(cat1);
    shelter.enqueue(cat2);

    const dequeuedCat = shelter.dequeue('cat');

    expect(dequeuedCat).toEqual(cat1);
    expect(shelter.catQueue.length).toBe(1);
    expect(shelter.catQueue[0]).toEqual(cat2);
  });

  test('Dequeue with invalid preference', () => {
    const dog = new Animal('dog', 'Buddy');
    shelter.enqueue(dog);

    const dequeuedInvalid = shelter.dequeue('bird');

    expect(dequeuedInvalid).toBeNull();
    expect(shelter.dogQueue.length).toBe(1);
  });

  test('Dequeue when both dog and cat queues are empty', () => {
    const dequeuedDog = shelter.dequeue('dog');
    const dequeuedCat = shelter.dequeue('cat');

    expect(dequeuedDog).toBeNull();
    expect(dequeuedCat).toBeNull();
  });
});
