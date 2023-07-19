
import './App.css';
import freeCodeCampLogo from './img/freecodecamp.png'
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {

  const [numClicks,setNumClicks] = useState(0);


  const incrementarClick = () => {
    setNumClicks(numClicks+1);
  
  }
  const reiniciarContador = () => {
    setNumClicks(0);
  }

  return (
    <div className="App">
      <div className="contenedor_logo">
        <img src={freeCodeCampLogo} alt="Logo" className='imagen_logo' />
      </div>

      <div className="contador_container">

        <div className="contador">
          <Contador numClicks= {numClicks} />
        </div>

        <Boton
          texto="Click"
          esBotonClic={true}
          manejarClick={incrementarClick} />

        <Boton
          texto="Reiniciar"
          esBotonClic={false}
          manejarClick={reiniciarContador} />
      </div>

    </div>
  );
}

export default App;
