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


let getEmpleado = async (id) => {

	let empleadoDB = empleados.find(empleado => empleado.id === id);

	if(!empleadoDB){
		throw(`No existe un empleado con el ID ${ id }`);
	}else{
		return empleadoDB;
	}
}

let getSalario = async(empleado) => {
	

	let SalarioDB = salarios.find( salario => salario.id === empleado.id);
	if (!SalarioDB){
		throw(`No se encontró un salario para el usuario ${ empleado.nombre }`);
	} else {
		return{
			nombre: empleado.nombre,
			salario: SalarioDB.salario,
			id: empleado.id
		};
	}
}

let getInformacion = async(id) => {

	let empleado = await getEmpleado(id);
	let resp = await getSalario(empleado);
	return `${ resp.nombre } tiene un salria de ${ resp.salario } `;
}

getInformacion(1)
	.then(mensaje => console.log(mensaje))
	.catch (err => console.log(err));