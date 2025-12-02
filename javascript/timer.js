'use strict'

window.addEventListener('load', function(){

    //Timers
    var tiempo = setInterval(function(){
        console.log("Set interval ejecutado");

        var encabezado = document.querySelector("h1");
        if(encabezado.style.fontsize =="50px"){
            encabezado.style.fontsize == "20px";
        }else{
            encabezado.style.fontsize = "50px";
        }
        document.querySelector("h1").style.fontsize = "50px"
    }, 3000);

    var stop = document.querySelector("#stop");

    stop.addEventListener("click", function(){
        alert("Has paradeo el bucle");
        clearInterval(tiempo);
    });

});