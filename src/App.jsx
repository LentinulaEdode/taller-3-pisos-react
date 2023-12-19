import { useState } from 'react'
import './App.css'

import Restrooms from './components/Restrooms';
import Bedrooms from './components/Bedrooms';
import Surface from './components/Surface';

function App() {
  const [bedrooms, setBedrooms] = useState('');
  const [restrooms, setRestrooms] = useState('');
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
        <h1 className='model-title'>Crear modelo predictivo</h1>

      <div className='button-grid'>
        <div className='restroom boton'
        onClick={() => {
          handleRestrooms();
        }
        }
        >
          <img src="./public/restroom.png" alt="Botón baños" />
          <div className='card-text'>
            {restrooms !== '' && <>
              <img className='checked' src="./public/checked.png" alt="checked" />
              <h2>{restrooms}</h2>
            </>}
            <h3>NÚMERO DE BAÑOS</h3>
          </div>
        </div>

        <div className='bedroom boton' onClick={() => {
          handleBedrooms();
        }
        }>
          <img src="./public/bedroom.png" alt="Botón habitaciones" />
          <div className='card-text'>
            {bedrooms !== '' && <>
              <img className='checked' src="./public/checked.png" alt="checked" />
              <h2>{bedrooms}</h2>
            </>}
            <h3>NÚMERO DE HABITACIONES</h3>
          </div>
        </div>

        <div className='surface boton' onClick={() => {
          handleSurface();
        }
        }
        >
          <img src="./public/surface.png" alt="Botón superficie" />
          <div className='card-text'>
            {surface[0] !== 0 && surface[1] !== 0 && <>
              <img className='checked' src="./public/checked.png" alt="checked" />
              <h2>{surface[0]} m<sup>2</sup> - {surface[1]} m<sup>2</sup></h2>
            </>}
            <h3>SUPERFICIE</h3>
          </div>
        </div>

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
