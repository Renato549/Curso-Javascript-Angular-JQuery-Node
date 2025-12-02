'use strict'


var nombre = "Victor Robles";
var nombres = ["Victor Robles", "Juan Lopez", "Manolo Garcia", "Jose Martin", 52, true];

var lenguajes = new Array("PHP", "JS", "GO", "JAVA");

var elemento = parseInt(prompt("Que elemento del array quieres??", 0));
if(elemento >= nombres.lenght){
    alert("Introduce el numero correcto menor que" + nombres.lenght);
}else{
    alert("El usuario seleccionado es: " + nombres[elemento]);
}

// document.write("<ul>");
// lenguajes.forEach((elemento)=>{
//     document.write("<list>" + elemento + "</list>");
// });
// document.write("</ul>");

// for(let lenguaje in lenguajes){
//     document.write("<list>" + lenguaje + "</list>");
// }
var busqueda = precios.some(precio => precio >= 20);
lenguajes.find(lenguaje =>lenguaje == "PHP");