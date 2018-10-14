// function sumar(a, b){
// 	return a + b;
// }

// let sumar = (a, b) => a + b;

// function saludar(){
// 	return 'Hola Mundo';
// }

// let saludar = () => 'Hola Mundo';

// function saludar(nombre){
// 	return `Hola ${ nombre }`;
// }

// let saludar = (nombre) => `Hola ${ nombre }`

// console.log(sumar(10, 20));
// console.log(saludar('Rodolfo'));
// 

let deadpool = {
	nombre: 'Wade',
	apellido: 'Winston',
	poder: 'Regeneración',
	getNombre() {
		return `${ this.nombre } ${this.apellido} - poder: ${this.poder}`
	}
};

console.log( deadpool.getNombre());