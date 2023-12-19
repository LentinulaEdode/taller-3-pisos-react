import { useState } from "react";

const Restrooms = ({restrooms, setRestrooms, moment, setMoment}) => {
    const [numberOfRestrooms, setNumberOfRestrooms] = useState('');

    return (
        <>
        <img src="./public/back.png" alt="Botón volver" onClick={() => setMoment('home')}/>
            <form action="">
                <label htmlFor="numberOfRestrooms">Número de habitaciones</label>
                <input type="radio" name="numberOfRestrooms" id="numberOfRestrooms" value="1 baño" onChange={(e) => setNumberOfRestrooms(e.target.value)}/>
                <label htmlFor="numberOfRestrooms">1</label>
                <input type="radio" name="numberOfRestrooms" id="numberOfRestrooms" value="2 baños" onChange={(e) => setNumberOfRestrooms(e.target.value)}/>
                <label htmlFor="numberOfRestrooms">2</label>
                <input type="radio" name="numberOfRestrooms" id="numberOfRestrooms" value="3 baños" onChange={(e) => setNumberOfRestrooms(e.target.value)}/>
                <label htmlFor="numberOfRestrooms">3</label>

                <button onClick={() => {
                setRestrooms(numberOfRestrooms);
                setMoment('home')
            }
            }
            >Siguiente</button>
            </form>
        </>
    )
}

export default Restrooms;