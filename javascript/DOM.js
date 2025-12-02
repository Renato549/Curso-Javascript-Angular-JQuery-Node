'use strict'

//DOM 
function cambiarColor(color){
    caja.style.color = color;
}
//Conseguir elemntos con id concreto

var caja = document.querySelector("#micaja");

caja.innerHTML = "Texto desde js";
caja.style.bachground="red";
caja.className = "hola";


//Conseguir elementos por etiqueta
var todosDivs = document.getElementsByTagName("div");
// todosDivs.forEach((valor, indice) =>{
var valor;
for(valor in todosDivs){

    if(typeof todosDivs[valor].textContent == 'string'){
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosDivs[valor].textContent);
        parrafo.appendChild(texto);
        document.querySelector("#miseccion").appendChild(parrafo);
    }
    
}
// }); 

//Conseguir elementos por clase 
var divRojo = document.getElementsByClassName('rojo');
var divAmar = document.getElementsByClassName('amarillo');
divAmar[0].style.background = "yellow";

for(var div in divRojo){
    if(divRojo[div].className == 'rojo'){
        divRojo[div].style.background('red');
    }
}

//QuerySelector
var claserojo = document.querySelector("div.rojo");
console.log(calserojo);

var etiqueta = document.querySelector("div");
console.log(etiqueta);