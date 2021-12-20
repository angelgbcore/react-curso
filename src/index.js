// importar la libreria de react
import React from "react";
// importar el manejador de dom react
import ReactDOM from "react-dom";

// obtener el elemento raiz del index.html
const root = document.getElementById("root");
// definir el elemento a incrustar en la raiz
var element = <h1>hola mundo</h1>;

// renderizar con el metodo de reactDOM
// ReactDOM.render(__que__, __donde__);
ReactDOM.render(element, root);
