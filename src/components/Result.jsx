import { useState, useEffect } from "react";
import apiFetch from '../utils/api';


const Result = ({ bedrooms, setBedrooms, restrooms, setRestrooms, surface, setSurface, moment, setMoment }) => {
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log(bedrooms, restrooms, surface);
        setLoading(true);
        apiFetch(restrooms, bedrooms, surface)
            .then(data => {
                setResult(data);
                setLoading(false);
            })
    }
        , [restrooms, bedrooms, surface]);


    return (
        <>
            <img src="back.png" alt="Botón volver" className="back-button flechita"
                onClick={() =>{
                setBedrooms('');
                setRestrooms('');
                setSurface('');
                setMoment('home')}} />

            <div className='result-container'>
                {loading && <img src="./public/loading.gif" alt="loading" />}
                <p className="result-text">
                    {result}
                </p>
            </div>

        </>
    )
}

export default Result;