import { useState } from "react";

const Restrooms = (props) => {

    return (
        <>
            <form action="">
                <label htmlFor="restrooms">Número de baños</label>
                <input type="radio" name="restrooms" id="restrooms" value="1 baño" />
                <label htmlFor="restrooms">1</label>
                <input type="radio" name="restrooms" id="restrooms" value="2 baños" />
                <label htmlFor="restrooms">2</label>
                <input type="radio" name="restrooms" id="restrooms" value="3 baños" />
                <label htmlFor="restrooms">3</label>
            </form>
        </>
    )
    }

export default Restrooms;