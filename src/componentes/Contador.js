import './Contador.css'
import React from "react"



function Contador({ numClicks }) {

    return (
        <div className="contador">
            { numClicks }

        </div>
    )
}


export default Contador;