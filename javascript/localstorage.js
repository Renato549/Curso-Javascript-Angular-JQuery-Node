'use strict'

if(typeof(Storage) !== 'undefined'){
    console.log("Local storage disponible");
}else{
    console.log("Incompatible con local storage");
}

//Guardar datos
localStorage.setItem("titulo", "Curso de javascript");

//Recuperar 
document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

//Guardar objetos
var usuario = {
    nombre: "Renato Ramirez",
    email: "renatoramirezcalva@gmail.com"

};

localStorage.setItem("usuario", JSON.stringify(usuario));

// localStorage.removeItem("usuario");

localStorage.clear();