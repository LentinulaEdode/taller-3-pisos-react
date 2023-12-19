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
      <h1>TuTasa</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="surface">Surface:</label>
        <input type="text" id="surface" name="surface" value={inputs.surface} onChange={handleChange} />

        <label htmlFor="bedrooms">Bedrooms:</label>
        <input type="text" id="bedrooms" name="bedrooms" value={inputs.bedrooms} onChange={handleChange} />

        <label htmlFor="restrooms">Restrooms:</label>
        <input type="text" id="restrooms" name="restrooms" value={inputs.restrooms} onChange={handleChange} />

        <button className='btn btn-warning' type="submit">Calcula</button>
        <button type='button' className='btn btn-warning'>HOLA</button>
      </form>

      {prediction && (
        <p>Predicted Price: {prediction}</p>
      )}
    </div>
  );
}

export default App;
