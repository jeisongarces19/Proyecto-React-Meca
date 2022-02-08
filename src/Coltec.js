import React from "react";
import "./Coltec.css";

/*Todo esto de aqui es jsx o javascrit , no html */

/*Los datos internos de los componentes se llaman estados(stade) */
export default function Cabezera(props) {
  return (
    <div className='Cabezera' id='Titulo'>
      <h1 id='Color'>{props.texto}</h1>    
      <h3 id='Subtitulo'>{props.subtitulo}</h3>      
    </div>
  );
}


/* Propiedades props que son para cambiar cosas a los componente*/

export default function App2() {
  return (
    <div>
      <p><Cabezera texto='Bienvenido a COLTEC!' subtitulo='Ingenieria SAS'> Llamar un componente</Cabezera></p>


      <header className='App-header'>
        <p>Por favor, Ingrese los datos:</p>        
      </header>
    </div>
  );
}
