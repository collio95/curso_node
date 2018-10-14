let nombre 	= "Superman";
let real	= "Clark Kent";
/*console.log(nombre + " es " + real);
console.log (`${ nombre } es ${ real }`);*/

// let nombreCompleto = nombre + ' ' + real;
// let nombreTemplate = `${ nombre } ${ real }`;

// console.log(nombreCompleto == nombreTemplate);

function getNombre(){
	return `${ nombre } ${ real }`;
}

console.log(`El nombre es: ${ getNombre() }`);