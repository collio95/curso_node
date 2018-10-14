let deadpool = {
	nombre: 'Wade',
	apellido: 'Winston',
	poder: 'Regeneración',
	getNombre: function(){
		return `${ this.nombre } ${this.apellido} - poder: ${this.poder}`
	}
};

console.log( deadpool.getNombre());

let { nombre, apellido, poder } = deadpool;
console.log(nombre, apellido, poder);