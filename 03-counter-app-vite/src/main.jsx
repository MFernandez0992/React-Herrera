import React, { StrictMode } from "react";
import {createRoot} from "react-dom/client"; // Llamada al React DOM para renderizar componentes
import {CounterApp} from "./CounterApp";
/* import { FirstApp } from "./FirstApp";
import { saludo } from "./HelloWorldApp"; */


// Importación de css en React
import './styles.css'

const root = createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <CounterApp value={0} />
    </StrictMode>
)