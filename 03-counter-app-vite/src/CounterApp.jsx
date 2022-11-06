import { useState } from 'react';

import PropTypes from 'prop-types';

export const CounterApp = ({value}) => {

    // Los Hooks deben declararse con constantes para no reasignarlos accidentalmente
    // Le asigno como useState(estado inicial) en 0
    const [ counter, setCounter ] = useState( 0 );

    // Cuando mando a llamar a setCounter le digo a React que el estado de la aplicación cambió por lo que debe volver a realizar la renderización con el nuevo estado del componente 
    const sumarClick = (e) => setCounter( counter + 1 );

    const restarClick = (e) => setCounter(counter -1);

    const resetClick = (e) => setCounter(value);

    return(
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>

            <button onClick={ sumarClick }>
                +1
            </button>

            <button onClick={ restarClick }>
                -1
            </button>

            <button onClick={ resetClick }>
                Reset
            </button>
        </>
    );    
}

CounterApp.propTypes = {
    value: PropTypes.number
}

/* Hooks -  */