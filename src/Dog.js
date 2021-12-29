import Animal from './Animal.js';

export default class Dog extends Animal {

	constructor( name, energy, breed ) {
		super( name, energy );
		this.breed = breed;
	}
}
