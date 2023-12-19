import { useState } from 'react'
import './App.css'

function App() {
  const [inputs, setInputs] = useState({
    surface: '',
    bedrooms: '',
    restrooms: ''
  });

  const [prediction, setPrediction] = useState(null);

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputs)
    });

    const data = await response.json();

    setPrediction(data.prediction);
  };

  return (
    <div className="App">
      <div id='user-card'>
        <div className='user-photo-div'>
          <img className='foto-user' src="./public/berta.jpg" alt="Foto de perfil del usuario" />
        </div>
        <h3>¡Hola Berta!</h3>
      </div>

      <div className='main-container'>
        <h1 className='model-title'>Crear modelo predictivo</h1>

      <div className='button-grid'>
        <div className='restroom boton'>
          <img src="./public/restroom.png" alt="Botón baños" />
          <h3>NÚMERO DE BAÑOS</h3>
        </div>

        <div className='bedroom boton'>
          <img src="./public/bedroom.png" alt="Botón habitaciones" />
          <h3>NÚMERO DE HABITACIONES</h3>
        </div>

        <div className='surface boton'>
          <img src="./public/surface.png" alt="Botón superficie" />
          <h3>SUPERFICIE</h3>
        </div>

        <div className='location boton'>
          <img src="./public/surface.png" alt="Botón localización" />
          <h3>LOCALIZACIÓN</h3>
        </div>

      </div>
      </div>
    </div>
  );
}

export default App;
