const fs = require('fs');

let listarPorHacer = [];

const guardarDB = () => {

	let data = JSON.stringify(listarPorHacer);

	fs.writeFile('DB/data.json', data, (err) => {
		if(err) throw new Error('No se pudo grabar', err);
	});
}

const cargarDB = () => {
	try{
		
		listadoPorHacer = require('../DB/data.json');

	}catch(error){

		listadoPorHacer = [];

	}
}

const crear = (descripcion) => {

	cargarDB();
 
	let porHacer = {
		descripcion,
		completado: false
	};

	listarPorHacer.push( porHacer );

	guardarDB();

	return porHacer;
}

const getListado = () => {

	cargarDB();
	return listadoPorHacer;

}

const actualizar = (descripcion , completado = true) => {

	cargarDB();

	let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion);
	
	if ( index >= 0){
		listadoPorHacer[index].completado = completado;
		guardarDB();
		return true;
	}else{
		return false;
	}
}

const borrar = (decripcion) => {

	cargarDB();

	let nuevoListado = listadoPorHacer.filter( tarea => tarea.descripcion !== descripcion );

	if(listadoPorHacer.length === nuevoListado.length){
		return false;
	} else {
		listadoPorHacer = nuevoListado;
		guardarDB();
		return true;
	}

} 

module.exports = {

	crear,
	getListado,
	actualizar,
	borrar

}