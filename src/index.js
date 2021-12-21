// importar la libreria de react
import React from "react";
// importar el manejador de dom react
import ReactDOM from "react-dom";

// obtener el elemento raiz del index.html
const root = document.getElementById("root");

var usuario = {
  name: "Angel",
  apellido: "Barrera"
}
function getData(usuario) {
  return `${usuario.name} ${usuario.apellido}`
}

// --------------------------------------------------
// JSX es una manera de poner etiquetas HTML dentro
// de codigo javascript para mejor renderizado del DOM y para
// mejorar la visualizacion del codigo
// --------------------------------------------------

// dentro de los componentes JSX se pueden insertar expresiones
// variables, funciones, etc
var element = <h1>Hola {getData(usuario)}</h1>;

// tambien se pueden anidar las etiquetas poniendo dos parentesis
var element_two = (
  <div>
    <h4>Hola {usuario.name}</h4>
    <p>Hola {getData(usuario)}</p>
  </div>
)

// renderizar con el metodo de reactDOM
// ReactDOM.render(__que__, __donde__);
ReactDOM.render([element, element_two], root);
