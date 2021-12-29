import Cat from './Cat.js';
import Dog from './Dog.js';

// Animals.
const cat = new Cat( 'Pepper', 10 );
const dog = new Dog( 'Chakotay', 10, 'Wolf' );

// Names!
console.warn( `Cat Name: ${cat.name}`, `Dog Name: ${dog.name}` );

// 10 + 2 = 12
cat.eat( 2 );
dog.eat( 2 );
console.warn( `Cat Energy: ${cat.energy}`, `Dog Energy: ${dog.energy}` );

// 12 - 6 = 6
cat.play( 6 );
dog.play( 6 );
console.warn( `Cat Energy: ${cat.energy}`, `Dog Energy: ${dog.energy}` );

// 6 + 4  = 10
cat.sleep( 2 );
dog.sleep( 2 );
console.warn( `Cat Energy: ${cat.energy}`, `Dog Energy: ${dog.energy}` );

// Dog breed
console.warn( `Dog Breed: ${dog.breed}` );
