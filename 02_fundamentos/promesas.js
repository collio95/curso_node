let empleados = [
	{
		id: 1,
		nombre: 'Rodolfo'
	},
	{
		id: 2,
		nombre: 'Cristian'
	},
	{
		id: 3,
		nombre: 'Patricio'
	}
]

let salarios = [
	{
		id: 1,
		salario: 1000
	},
	{
		id: 2,
		salario: 2000
	}
];


let getEmpleado = (id) => {

	return new Promise((resolve, reject) => {

		let empleadoDB = empleados.find(empleado => empleado.id === id);

		if(!empleadoDB){
			reject(`No existe un empleado con el ID ${ id }`);
		}else{
			resolve(empleadoDB);
		}
	});
}

let getSalario = (empleado) => {
	return new Promise( (resolve, reject) => {
	
		let SalarioDB = salarios.find( salario => salario.id === empleado.id);
		if (!SalarioDB){
			reject(`No se encontró un salario para el usuario ${ empleado.nombre }`);
		} else {
			resolve({
				nombre: empleado.nombre,
				salario: SalarioDB.salario,
				id: empleado.id
			});
		}
	});
}

getEmpleado(3).then(empleado => {
	getSalario(empleado).then( resp => {
		console.log(`El salario de ${ resp.nombre } es de ${resp.salario}$`);
	}, err => {
		console.log(err);
	})
},(err) => {
	console.log(err);
}
);