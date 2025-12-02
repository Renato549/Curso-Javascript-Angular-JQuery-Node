'use strict'
/*
Pida 6 numeros por pantalla y los meta en un array
mostrar el array entero en el cuerpo de la pagina y en consola
ordenarlo y mostrarlo
mostrar cuantos elementos tiene el array
busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice
*/

function mostrarArray(elementos,textoCustom = ""){
    document.write("<h1>Contenido del array" + textoCustom + "</h1>");
    document.write("<ul>");
    elementos.forEach((elemento, index)=>{
        document.write("<strong>" + elemento + "</strong><br/>");
    });
    document.write("</ul>");
}

//Pedir numeros
var numeros = new Array(6);

for(var i = 0; i < 5; i++){
    // numeros[i] = parseInt(prompt("Introduce un numero", 0));
    numeros.push(parseInt(prompt("Introduce un numero", 0)));
}

//Mostrar en pagina
mostrarArray(numeros);

//Mostrar consola
console.log(numeros);
//Ordenar
numeros.sort(function(a , b){return a - b});
mostrarArray(numeros, 'ordenado');

//Invertir y mostrar
numeros.reverse();
mostrarArray(numeros, 'revertido');

//Contar elementos
document.writeln("<h1>El array tiene: " + numeros.length + "elementos</h1>");

//Busqueda
var busqueda = parseInt(prompt('busca un numero un numero', 0));
posicion=numeros.findIndex(busqueda);
if(posicion && posicion !=-1){
    document.write("Posicion de la busqueda:" + posicion);    
}else{
    document.write("No encontrado");
}
