import './App.css';
import logo from './images/logo.jpg';
import Boton from './components/boton';
import Contador from './components/Contador';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numClicks + 1)
  };

  const reiniciarContador = () => {
    setNumClicks(0)
  };

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img className='logo'
          src={logo}
          alt='logo' />
      </div>
      <div className='contenedor-principal'>
        <Contador numClicks={numClicks}/>
        <Boton
          texto='Click'
          esBotonDeClick={true}
          manejarClick={manejarClick} />
        <Boton
          texto='Reiniciar'
          esBotonDeClick={false}
          manejarClick={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
