import { useState } from 'react';
import PropTypes from 'prop-types';
import { number } from 'prop-types';

export const CounterApp = ({ value }) =>{

    /* Hooks - Estos permiten usar el estado y otras características de React sin escribir una clase, no son más que funciones.
    
    En este caso creo una constante desestructurando counter(valor inicial) y setCounter(es quien va a modificar el counter), y le asigno al useState(estado) el valor inicial de value(0) en el main.jsx
    
    */
    const [ counter, setCounter ] = useState( value );
    
    const sumarBoton = (e) => {
        //console.log(e);

        /* Cuando llamo la función setCounter esta tomará el valor del counter y le sumará uno */
        setCounter( counter + 1);
    }

    const restarBoton = (e) => setCounter( counter - 1);
    const resetBoton = (e) => setCounter( value );

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>
            <button onClick={ sumarBoton }>
                +1
            </button>

            <button onClick={ restarBoton }>
                -1
            </button>

            <button onClick={ resetBoton }>
                Reset
            </button>
        </>
    );
}

/* Hago una verificación para que el value sea solamente número y obligatorio
CounterApp.propTypes = {
    value: number.isRequired
} */