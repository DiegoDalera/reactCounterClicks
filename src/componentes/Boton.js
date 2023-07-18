import React from "react";
import './Boton.css'


function Boton({ texto , esBotonClic, manejarClick }){
	return(
		<button className={esBotonClic ? "boton_click": "boton_reiniciar"} onClick={manejarClick}>
			{texto}
		</button>



	)
}

export default Boton