import React from "react";
import '../styles/Boton.css'

function Boton({ texto, esBotonDeClick, manejarClick}){
    return(
        <button
            className={esBotonDeClick ? 'boton-clic' : 'boton-reiniciar' }
            onClick={manejarClick}> 
            {texto}
        </button>
    );
};

export default Boton;