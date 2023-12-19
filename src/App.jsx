import { useState } from 'react'
import './App.css'

import Restrooms from './components/Restrooms';
import Bedrooms from './components/Bedrooms';
import Surface from './components/Surface';
import Provinces from './components/Provinces';

function App() {
  const [bedrooms, setBedrooms] = useState(0);
  const [restrooms, setRestrooms] = useState(0);
  const [surface, setSurface] = useState([0, 0]);
  const [moment, setMoment] = useState('home');

  const handleRestrooms = () => {
    setMoment('restrooms');
  }

  const handleBedrooms = () => {
    setMoment('bedrooms');
  }

  const handleSurface = () => {
    setMoment('surface');
  }

  return (
    
    <div className="App">
      {moment === 'home' &&  
      <>
      <div id='user-card'>
        <div className='user-photo-div' >
          <img className='foto-user' src="./public/berta.jpg" alt="Foto de perfil del usuario" />
        </div>
        <h3>¡Hola Berta!</h3>
      </div>

      <div className='main-container'>
        <h1>Crear modelo predictivo</h1>

        <div className='restroom boton'
        onClick={() => {
          handleRestrooms();
        }
        }
        >
          <img src="./public/restroom.png" alt="Botón baños" />
          <h3>NÚMERO DE BAÑOS</h3>
        </div>

        <div className='bedroom boton' onClick={() => {
          handleBedrooms();
        }
        }>
          <img src="./public/bedroom.png" alt="Botón habitaciones" />
          <h3>NÚMERO DE HABITACIONES</h3>
        </div>

        <div className='surface boton' onClick={() => {
          handleSurface();
        }
        }
        >
          <img src="./public/surface.png" alt="Botón superficie" />
          <h3>SUPERFICIE</h3>
          <p>{'Entre ' + surface[0] + ' y ' + surface[1]}</p>
        </div>

      </div>
      </>
      }

      {moment === 'restrooms' && <Restrooms setRestrooms={setRestrooms} setMoment={setMoment} />}
      {moment === 'bedrooms' && <Bedrooms setBedrooms={setBedrooms} setMoment={setMoment} />}
      {moment === 'surface' && <Surface setSurface={setSurface} setMoment={setMoment} />}

      </div>
  );
}

export default App;
