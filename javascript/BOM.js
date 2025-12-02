'use strict'
//BOM - Browser object model
function getBom(){
    console.log(window.innerHeight);
    console.log(window.innerWidth);
    console.log(screen.height);
    console.log(screen.height);   
    console.log(window.location); 
}

function redirect(url){
    window.location.href = url;

}
getBom();

