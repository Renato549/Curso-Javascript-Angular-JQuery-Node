'use strict'

//Eventos

window.addEventListener('load', () =>{
    function cambiarColor(){
        var bg = boton.style.background;
        if(bg="green"){
            boton.style.background="red";
        }else{
            boton.style.background="blue";
        }
        return true;
    }
    var boton = document.querySelector("#boton");
    boton.addEventListener('click', cambiarColor(), this.style.border ="10px solid black");

    boton.addEventListener('mouseover',function(){
        boton.style.background="#ccc";
    });

    boton.addEventListener('mouseout', function(){
        boton.style.background="purple";

    });

    var input=document.querySelector("#campo_nombre");
    inpur.addEventListener('focus', function(){
        console.group("Estas dentro del input");
    });
    inpur.addEventListener('blur', function(){
        console.group("Estas fuera del input");
    });
    inpur.addEventListener('keydown', function(event){
        console.group("Estas escribiendo esta tecla", String.fromCharCode(event.keycode));
    });
    inpur.addEventListener('keypress', function(event){
        console.group("Tecla presionada", String.fromCharCode(event.keycode));
    });

});//end-load


