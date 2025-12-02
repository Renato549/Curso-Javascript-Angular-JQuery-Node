'use strict'

var instrumento = {
    Modelo: "cv820wb",
    Marca: "Yamaha",
    Cantidad: "1000" 
};

var instrumentos = [
    {Modelo: "Eb-03", 
        Marca: "Epiphone",
        Cantidad: "5000"
    }, intrumento
];

var Lote_instrumentos = document.querySelector("Instrumentos");
for(var index in instrumentos){
    var p = document.createElement("p");
    p.append(instrumentos[index].Modelo + " - " + instrumentos[index].Marca);
    Lote_instrumentos.append(p);
};