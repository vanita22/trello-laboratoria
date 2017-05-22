function agregar(){

var posteo = document.getElementById("contposteos").value; 
var parrafo = document.getElementById("posteo").value; 
var contenido = document.createElement("p"); 
var textoP = document.createTextNode(parrafo);
contenido.appendChild(textoP); 
posteo.appendChild(contenido);

document.getElementById("posteo").value = "";

}



