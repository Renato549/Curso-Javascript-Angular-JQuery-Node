'use strict' 

//Fetch(ajax) peticiones a servicios / apis rest
var div_usuarios = document.querySelector("#usuarios");
var div_user = document.querySelector("#usuario");

    getUsuarios()
        .then(data =>  data.json())
        .then(users => {
            listadoUsuarios(users.data);
            return getInfo();
            
        })
        .then(data => {
            console.log(data);
            return getUsuario();
        })
        .then(data => data.json())
        .then(user =>{
            mostrarJanet(user.data);
        })
        .catch(error => {console.log(error)}); 
        
function getUsuarios(){
    return fetch('https://reqres.in/api/users');
}
function getUsuario(){
    return fetch('https://reqres.in/api/users/2');
}
function getInfo(){
    var profesor = {
        nombre: 'Renato',
        apellidos: 'Ramirez',
        url: 'https://victorrobleweb.es'
    };
    return new Promise((resolve,reject) => {
        var profesor_string = "";
        setTimeout(function(){
            profesor_string = JSON.stringify(profesor);

            if(typeof profesor_string)return reject('error');
        
            return resolve(profesor_string);
        }, 3000);
        
    });
    
}
function listadoUsuarios(usuarios){
    usuarios.map((users, i) =>{
            let nombre = document.createElement("h3");

            nombre.innerHTML = i + "." + users.first_name + " " + users.lst_name;

            div_usuarios.appendChild(nombre);
        });
}
function mostrarUsuario(usuario){
    
    let nombre = document.createElement("h4");

    nombre.innerHTML = usuario.first_name + " " + usuario.lst_name;

    div_usuario.appendChild(nombre);

}