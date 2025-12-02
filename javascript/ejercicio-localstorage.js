'use strict'

var formulario = document.querySelector("FormInstrumento");
formulario.addEventListener('submit', function(){
    var titulo = document.querySelector('#addpelicula').value;
    localstorage.setItem(titulo, titulo);
    if(titulo.lenght <= 0){
        localStorage.setItem(titulo,titulo);
    }

});
var ul = document.querySelector('#Instrumentos-list');
for(var i in localStorage){
    console.log(localStorage[i]);
    if(typeof localStorage[i] == 'string'){
        var li = document.createElement("li");
        li.append(localStorage[i]); 
        ul.append(li);
    }
}
var formulariob = document.querySelector("FormBorrarInstrumento");
formulario.addEventListener('submit', function(){
    var titulo = document.querySelector('#deletepelicula').value;
    localstorage.setItem(titulo, titulo);
    if(titulo.lenght <= 0){
        localStorage.removeItem(titulo,titulo);
    }

});