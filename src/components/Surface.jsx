import { useState } from "react";

const Surface = ({surface, setSurface, moment, setMoment}) => {
    const [surfaceMin, setSurfaceMin] = useState(0);
    const [surfaceMax, setSurfaceMax] = useState(0);

return (
    <>
        <img src="./public/back.png" alt="Botón volver" onClick={() => setMoment('home')}/>
        <form action="">
            <label htmlFor="min-surface">Superficie mínima</label>
            <input type="number" name="min-surface" id="min-surface" value={surface} onChange={(e) => setSurfaceMin(e.target.value)} />

            <label htmlFor="max-surface">Superficie máxima</label>
            <input type="number" name="max-surface" id="max-surface" value={surface} onChange={(e) => setSurfaceMax(e.target.value)} />

            <button onClick={() => {
                setSurface([surfaceMin, surfaceMax]);
                setMoment('home')
            }
            }
            >Siguiente</button>
            </form>
        </>
)
    }

export default Surface;