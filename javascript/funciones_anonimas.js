'use strict'

//Funciones anonimas

// var pelicula = function(nombre){
//     return "La pelicula es: " + nombre;
// }

//Funcion de callback
// function sumame(numero1, numero2, sumaYmuestra, sumax2){
//     var sumar = numero1 + numero2;

//     sumaYmuestra(sumar);
//     sumax2(sumar);
//     return sumar;
// }
// sumame(5, 7, function(dato){
//     console.log("la suma es:", dato);
// },
// function(dato){
//     console.log("La suma por dos es:", (dato*2));
// });
// console.log(sumame(4, 5));

//Funcion de flecha
function sumame(numero1, numero2, sumaYmuestra, sumax2){
    var sumar = numero1 + numero2;

    sumaYmuestra(sumar);
    sumax2(sumar);
    return sumar;
}
sumame(5, 7, dato => {
    console.log("la suma es: ", dato);
},
dato => {
    console.log("La suma por dos es: ", (dato*2));
});
console.log(sumame(4, 5));