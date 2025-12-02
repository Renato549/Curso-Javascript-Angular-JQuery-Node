'use strict'

//Funciones 
//Agrupacion reutilizable de un conjunto de instrucciones

// function calculadora(a, b){
//     mult = a * b;
//     sum = a + b;
//     rest = a - b;
//     return "Hola, el resultado del calculo es:" + "Multiplicacion" 
//     + mult + "Suma" + sum + "Resta" + rest;
// }
// var resultado = calculadora(17, 58);
// console.log(resultado);

// for(var i = 1; i <= 10; i++){

//     calculadora(i, 17);
// }

//Parametros opcionales
// function calculadora(a, b, mostrar=false){
//     mult = a * b;
//     sum = a + b;
//     rest = a - b;
//     if(mostrar == false){
//         console.log("Hola, el resultado del calculo es:" + "Multiplicacion" 
//     + mult + "Suma" + sum + "Resta" + rest);
//     }else{
//         Document.write("Hola, el resultado del calculo es:" + "Multiplicacion" 
//     + mult + "Suma" + sum + "Resta" + rest);
//     }
// }

// calculadora(16,32);
// calculadora(27,41, true);

//Parametros REST y SPREAD

function listadoFrutas(fruta1, fruta2, ...resto_frutas){
    console.log("Fruta1: ", fruta1);
    console.log("Fruta2: ", fruta2);
    console.log(resto_frutas);
}

listadoFrutas("Naranja", "Manzana", "Sandia", "Melon", "Coco");

var frutas = ["Melon", "Coco"];
listadoFrutas(...frutas,"Naranja", "Manzana", "Sandia", "Pera");



