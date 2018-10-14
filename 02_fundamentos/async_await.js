/*
	Async Await
 */

// let getNombre = async() => {
// 	throw new Error('No existe un nombre para este usuario');
// 	return 'Rodolfo';
// };
// console.log(getNombre());

/*
Referencia
*/
let getNombre = () => {
	return new Promise( (resolve, reject) => {
		setTimeout(() => {
			resolve('Rodolfo');
		}, 3000);
	});
}

let saludo = async () => {


	let nombre = await getNombre();

	return `Hola ${ nombre }`;

}

saludo().then(mensaje => {
	console.log(mensaje);
})

// getNombre().then(nombre =>{
// 	console.log(nombre);
// }).catch(e => {
// 	console.log('Error en Async', e);
// });