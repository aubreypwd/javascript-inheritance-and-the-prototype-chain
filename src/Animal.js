export default class Animal {

	constructor( name, energy ) {

		this.name = name;
		this.energy = energy;
	}

	eat( amount ) {
		this.energy += amount;
	}

	sleep( amount ) {
		this.energy += amount * 2;
	}

	play( amount ) {
		this.energy -= amount;
	}
}
