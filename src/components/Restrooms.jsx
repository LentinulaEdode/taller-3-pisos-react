import { useState } from "react";

const Restrooms = ({restrooms, setRestrooms, moment, setMoment}) => {
    const [numberOfRestrooms, setNumberOfRestrooms] = useState('');

    return (
        <>
        <img src="./public/back.png" className="flechita" alt="Botón volver" onClick={() => setMoment('home')}/>
            <form action="" className="restroom-form">
                <label htmlFor="numberOfRestrooms">Número de baños</label>
                <input type="radio" name="numberOfRestrooms" id="numberOfRestrooms" value="1" onChange={(e) => setNumberOfRestrooms(e.target.value)}/>
                <label htmlFor="numberOfRestrooms">1</label>
                <input type="radio" name="numberOfRestrooms" id="numberOfRestrooms" value="2" onChange={(e) => setNumberOfRestrooms(e.target.value)}/>
                <label htmlFor="numberOfRestrooms">2</label>
                <input type="radio" name="numberOfRestrooms" id="numberOfRestrooms" value="3" onChange={(e) => setNumberOfRestrooms(e.target.value)}/>
                <label htmlFor="numberOfRestrooms">3</label>

                <button className="restroom-submit-button"
                onClick={() => {
                setRestrooms(numberOfRestrooms);
                setMoment('home')
            }}
            >Siguiente
            </button>
            </form>
        </>
    )
}

export default Restrooms;