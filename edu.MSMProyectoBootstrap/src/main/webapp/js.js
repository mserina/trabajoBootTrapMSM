/**
 * 
 */

let veces = 0;
const dataStored = localStorage.getItem("estado");
if (dataStored) {
   veces = dataStored;
}
if (document.getElementById("contador"))
   document.getElementById("contador").innerHTML = veces

let arr =[0,0]
const dataStored2 = localStorage.getItem("array");
if (dataStored2) {
   //arr = dataStored2;
   arr = JSON.parse(dataStored2)
}
if (document.getElementById("contador2"))
   document.getElementById("contador2").innerHTML = typeof(arr)






function validadorCampos(){
	
	
	if((hola() == true) && (apellidos() == true) && (gmail() == true) && (telefono() == true))
	{
		return true;	
	}
	else{
		return false;
	}
}

function hola(){
	alert("hola")
	let nombre = document.getElementById('nombre');
	let errorNombre = document.getElementById('error-nombre');
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
	alert("apellidos")
	let apellido = document.getElementById('apellidos');
	let errorApellidos = document.getElementById('error-apellidos');
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
	alert("gmail")
	let gmail = document.getElementById('gmail');
	let errorGmail = document.getElementById('error-gmail');
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


function telefono(){
	alert("telefono")
	let telefono = document.getElementById('telefono');
	let errorTelefono = document.getElementById('error-telefono');
    var valor = telefono.value;
    let resultado = "";

    // Validar si el nombre es un número
    if(isNaN(valor) || valor.length > 9){
        resultado = false;
        errorTelefono.style.display = 'block';
        errorTelefono.style.borderColor = 'red';
        return false;
    } else {
        resultado = true;
        errorTelefono.style.display = 'none';
        errorTelefono.style.borderColor = ''; 
        alert("Introdujo bien el telefono");
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
