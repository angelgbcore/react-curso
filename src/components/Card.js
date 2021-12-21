// un componente son bloques de construccion que se puede 
// reutilizar a lo largo de un proyecto 
// elemento (react) => componente (javascript)
// componente (react) => clase (javascript)

// existen componentes:
//    - funcionales
//    - de clase <==

// se importa react
import React from "react"
// importamos imagen
import excerciseImg from "../images/exercise.png"

// se crea una clase que extiende de una clase llamada
// React.Component
class Card extends React.Component {
  // siempre existirá este metodo que renderiza lo que
  // se va imprimir
  render(){
    return (
      <div>
        <div>
          <img src={excerciseImg}/>
        </div>
        <div>
          <h1>Technique Guides</h1>
          <p>Learn amazing street workout and calisthenics</p>
        </div>
      </div>
    )
  }
}

// se exporta la clase (componente) Card
export default Card