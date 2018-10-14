//requireds
const fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite = 10) => {

	console.log('======================'.green);
	console.log(`==tabla de ${ base }==`.green);
	console.log('======================'.green);

	for(let i = 1; i <= limite; i++){

		console.log( `${ base } * ${ i } = ${ i*base }` );
	} 

}

let crearArchivo = (base, limite = 10) => {

	return new Promise((resolve, reject) => {

		if(!Number(base)){
			reject(`Esto no es un número`);
			return;
		}

		let data = '';

		for(let i = 1; i <= limite; i++){

			data +=`${ base } * ${ i } = ${ i*base } \n \n`;
		} 

		fs.writeFile(`tablas/tabla_${base}_al_${limite}.txt`, data, (err) => {
		  
		  if (err) 
		  	return (err)
		  else 
		  	resolve(`tabla_${base}_al_${limite}.txt`);

		});

	})

}

module.exports = {
	crearArchivo,
	listarTabla
}