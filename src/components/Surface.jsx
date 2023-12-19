import { useState } from "react";

const Surface = ({surface, setSurface, moment, setMoment}) => {
    const [surfaceMetters, setSurfaceMetters] = useState('');

return (
    <>
        <img src="./public/back.png" alt="Botón volver" onClick={() => setMoment('home')}/>
        <form action="">
            <label htmlFor="surfaceMetters">Superficie</label>
            <input type="number" name="surfaceMetters" id="surfaceMetters" value={surfaceMetters} onChange={(e) => setSurfaceMetters(e.target.value)} />

            <button onClick={() => {
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