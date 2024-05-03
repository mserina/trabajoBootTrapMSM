/**
 * 
 */




function hola(){
	alert("hola")
	const miUser = document.getElementById('nombre');
	var valor = miUser.value;
	alert(valor)
	let resultado = "";
	if(Number(valor)){
		resultado = false;
		alert("El nombre esta mal");
		return false
	}
}

function nombre(){
	alert("hola")
	const miUser = document.getElementById('nombre');
	var valor = miUser.value;
	alert("dos")
	let resultado = "";
	if(Number(valor)){
		resultado = false;
		alert("El nombre esta mal");
		return false
	}
	else
	{
		resultado = true;
		alert("el nombre esta bien");
		return true
	}
	
	
	
}