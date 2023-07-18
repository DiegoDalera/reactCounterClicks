
import './App.css';
import freeCodeCampLogo from './img/freecodecamp.png'
import Boton from './componentes/Boton';

function App() {

  const incrementarClick = () => {
    console.log("incrementar")
  }
  const reiniciarContador = () => {
    console.log("reiniciar")
  }

  return (
    <div className="App">
      <div className="contenedor_logo">
        <img src={freeCodeCampLogo} alt="Logo" className='imagen_logo' />
      </div>

      <div className="contador_container">
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
