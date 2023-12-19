import { useState } from "react";

const Bedrooms = (props) => {

    return (
        <>
            <form action="">
                <label htmlFor="bedrooms">Número de habitaciones</label>
                <input type="radio" name="bedrooms" id="bedrooms" value="1 habitación" />
                <label htmlFor="bedrooms">1</label>
                <input type="radio" name="bedrooms" id="bedrooms" value="2 habitaciones" />
                <label htmlFor="bedrooms">2</label>
                <input type="radio" name="bedrooms" id="bedrooms" value="3 habitaciones" />
                <label htmlFor="bedrooms">3</label>
                <input type="radio" name="bedrooms" id="bedrooms" value="4 habitaciones" />
                <label htmlFor="bedrooms">4</label>
            </form>
        </>
    )
}

export default Bedrooms;