export default class Animal {

	constructor( name, energy ) {

		this.name = name;
		this.energy = energy;
	}

	eat( amount ) {
		this.energy += amount;
	}

	sleep( amount ) {
		this.energy += amount;
	}

	play( amount ) {
		this.energy -= amount;
	}
}
