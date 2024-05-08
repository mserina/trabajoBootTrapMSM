/**
 * 
 */




function validadorCampos(){
	
	hola();
	apellidos();
	gmail();
}

function hola(){
	alert("hola")
	const nombre = document.getElementById('nombre');
	const errorNombre = document.getElementById('error-nombre');
    var valor = nombre.value;
    let resultado = "";

    // Validar si el nombre es un número
    if(!isNaN(valor) || valor.length > 10){
        resultado = false;
        errorNombre.style.display = 'block';
        errorNombre.style.borderColor = 'red';
        return false;
    } else {
        resultado = true;
        errorNombre.style.display = 'none';
        errorNombre.style.borderColor = ''; 
        alert("Introdujo bien el nombre");
        return true;
    }
}

function apellidos(){
	alert("hola")
	const apellido = document.getElementById('apellidos');
	const errorApellidos = document.getElementById('error-apellidos');
    var valor = apellido.value;
    let resultado = "";

    // Validar si el nombre es un número
    if(!isNaN(valor) || valor.length > 20){
        resultado = false;
        errorApellidos.style.display = 'block';
        errorApellidos.style.borderColor = 'red';
        return false;
    } else {
        resultado = true;
        errorApellidos.style.display = 'none';
        errorApellidos.style.borderColor = ''; 
        alert("Introdujo bien el apellido");
        return true;
    }
}

function gmail(){
	alert("hola")
	const gmail = document.getElementById('gmail');
	const errorGmail = document.getElementById('error-gmail');
    var valor = gmail.value;
    let resultado = "";

    // Validar si el nombre es un número
    if(!isNaN(valor) || valor.length > 50 || !valor.endsWith("@gmail.com")){
        resultado = false;
        errorGmail.style.display = 'block';
        errorGmail.style.borderColor = 'red';
        return false;
    } else {
        resultado = true;
        errorGmail.style.display = 'none';
        errorGmail.style.borderColor = ''; 
        alert("Introdujo bien el gmail");
        return true;
    }
}







/*
function hola(){
	alert("hola")
	const miUser = document.getElementById('nombre');
	var valor = miUser.value;
	alert(valor)
	let resultado = "";
	if(Number(valor))
	{
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
*/
