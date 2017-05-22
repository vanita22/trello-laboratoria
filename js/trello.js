function agregar(){

var parrafo = document.getElementById("posteo").value;
 
var contenido = document.createElement("p");
 
var textoP = document.createTextNode(parrafo);

contenido.appendChild(textoP);
 
document.body.appendChild(contenido);

}

