import { useState } from "react";

const Surface = ({surface, setSurface, moment, setMoment}) => {
    const [surfaceMetters, setSurfaceMetters] = useState('');

return (
    <>
        <img src="./public/back.png" className="flechita" alt="Botón volver" onClick={() => setMoment('home')}/>
        <form action="" className="surface-form">
            <label htmlFor="surfaceMetters">Superficie</label>
            <input type="number" name="surfaceMetters" id="surfaceMetters" value={surfaceMetters} onChange={(e) => setSurfaceMetters(e.target.value)} />

            <button className="surface-submit-button mt-3"
                onClick={() => {
                setSurface(surfaceMetters);
                setMoment('home')
            }
            }
            >Siguiente</button>
            </form>
        </>
    )
}

export default Surface;