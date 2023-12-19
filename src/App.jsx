import { useState } from 'react'
import './App.css'

import Restrooms from './components/Restrooms';
import Bedrooms from './components/Bedrooms';
import Surface from './components/Surface';
import Result from './components/Result';

function App() {
  const [error, setError] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [restrooms, setRestrooms] = useState('');
  const [surface, setSurface] = useState('');
  const [moment, setMoment] = useState('welcome');

  const handleApply = () => {
    if (bedrooms === '' || restrooms === '' || surface === 0) {
      setError('Debes rellenar todos los campos');
    } else {
      setMoment('result');
    }
  }

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
      {moment === 'welcome' &&
        <>
          <div className='welcome'>
            <img src="surface.png" alt="Bienvenida" />
            <button type='button' className='btn btn-primary' onClick={() => setMoment('home')}>EMPEZAR</button>
          </div>
        </>
      }
      {moment === 'home' &&  
      <>
      <div id='user-card'>
        <div className='user-photo-div' >
          <img className='foto-user' src="berta.jpg" alt="Foto de perfil del usuario" />
        </div>
        <h3>¡Hola Berta!</h3>
      </div>

      <div className='main-container'>
      <div className='error'>{error}</div>
        <h1 className='model-title'>Crear modelo predictivo</h1>

      <div className='button-grid'>
        <div className='restroom boton'
        onClick={() => {
          handleRestrooms();
        }
        }
        >
          <img src="restroom.png" alt="Botón baños" />
          <div className='card-text'>
            {restrooms !== '' && <>
              <img className='checked' src="checked.png" alt="checked" />
              <h2>{restrooms}</h2>
            </>}
            <h3>NÚMERO DE BAÑOS</h3>
          </div>
        </div>

        <div className='bedroom boton' onClick={() => {
          handleBedrooms();
        }
        }>
          <img src="bedroom.png" alt="Botón habitaciones" />
          <div className='card-text'>
            {bedrooms !== '' && <>
              <img className='checked' src="checked.png" alt="checked" />
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
          <img src="surface.png" alt="Botón superficie" />
          <div className='card-text'>
            {surface !== '' && <>
              <img className='checked' src="checked.png" alt="checked" />
              <h2>{surface} m<sup>2</sup></h2>
            </>}
            <h3>SUPERFICIE</h3>
          </div>
        </div>

      </div>
      </div>
      <button type='button' className='btn btn-primary aplicar-button'
        onClick={() => handleApply()}>APLICAR</button>
      </>
      }

      {moment === 'restrooms' && <Restrooms setRestrooms={setRestrooms} setMoment={setMoment} />}
      {moment === 'bedrooms' && <Bedrooms setBedrooms={setBedrooms} setMoment={setMoment} />}
      {moment === 'surface' && <Surface setSurface={setSurface} setMoment={setMoment} />}
      {moment === 'result' && <Result bedrooms={bedrooms} setBedrooms={setBedrooms} restrooms={restrooms} setRestrooms={setRestrooms} surface={surface} setSurface={setSurface} moment={moment} setMoment={setMoment} />}


      </div>
  );
}

export default App;
