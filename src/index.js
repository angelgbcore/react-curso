// importar la libreria de react
import React from "react";
// importar el manejador de dom react
import ReactDOM from "react-dom";
// importar el primer componente
import Card from "./components/Card"

// obtener el elemento raiz del index.html
const root = document.getElementById("root");

// renderizar con el metodo de reactDOM
// ReactDOM.render(__que__, __donde__);
// se crea la etiqueta con el nombre del componente
ReactDOM.render(<Card />, root);
