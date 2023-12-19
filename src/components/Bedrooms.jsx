import { useState } from "react";

const Bedrooms = ({bedrooms, setBedrooms, moment, setMoment}) => {
    const [numberOfBedrooms, setNumberOfBedrooms] = useState('');

    return (
        <>
        <img src="./public/back.png" alt="Botón volver" onClick={() => setMoment('home')}/>
            <form action="" className="bedrooms-form">
                <label htmlFor="numberOfBedrooms">Número de habitaciones</label>
                <input type="radio" name="numberOfBedrooms" id="numberOfBedrooms" value="1" onChange={(e) => setNumberOfBedrooms(e.target.value)}/>
                <label htmlFor="numberOfBedrooms">1</label>
                <input type="radio" name="numberOfBedrooms" id="numberOfBedrooms" value="2" onChange={(e) => setNumberOfBedrooms(e.target.value)}/>
                <label htmlFor="numberOfBedrooms">2</label>
                <input type="radio" name="numberOfBedrooms" id="numberOfBedrooms" value="3" onChange={(e) => setNumberOfBedrooms(e.target.value)}/>
                <label htmlFor="numberOfBedrooms">3</label>
                <input type="radio" name="numberOfBedrooms" id="numberOfBedrooms" value="4" onChange={(e) => setNumberOfBedrooms(e.target.value)} />
                <label htmlFor="numberOfBedrooms">4</label>

                <button  className="bedrooms-submit-button"
                onClick={() => {
                setBedrooms(numberOfBedrooms);
                setMoment('home')
                }}
            >Siguiente
            </button>
            </form>
        </>
    )
}

export default Bedrooms;