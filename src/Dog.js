import Animal from './Animal.js';

export default class Dog extends Animal {

	#breed = 'Unknown';

	constructor( name, energy, breed ) {
		super( name, energy );

		this.#breed = breed; // Dogs unlike cats (or any animal) can have a breed.
	}

	breed() {
		return this.#breed;
	}
}
