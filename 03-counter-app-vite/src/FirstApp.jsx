import PropTypes from 'prop-types';

/* const saludo = (props) => {
    let nombre = prompt('Cual es tu nombre?')
    return nombre;
} */

const newMessage = {
    message: 'Matías',
    title: 'Hola'
};

export const FirstApp = ( {name, title, subTitle} ) => {




    return (
    <>
{/*     <h2>{ newMessage }</h2> Los objetos como tal no pueden mostrarse en React, se debe acceder a sus propiedades y mostrarlas individualmente*/}
    <h2>{ newMessage.message }</h2>
{/*     <h3>Hola { saludo() }</h3> */}
    <p>{ title }</p>
    <p>{ subTitle + 1}</p>
    <p>{ name }</p>
</>
    )
}
// Props - Properties
/* Son las propiedades que le estamos mandando a una función, puede tener mucha información dependiendo del contexto, permiten crear un canal de comunicación que fluye desde el componente padre al componente hijo */

/* PropTypes - Permite validar un tipo de dato de las props y si se desea que sea requerido, se debe importar si se trabaja con Vite, sino con WebPack ya viene incluido */
FirstApp.propTypes = {
    title: PropTypes.string.isRequired
}


/* DefaultProps - Son valores por defecto que asignamos a las props en caso de que vengan sin valores */
FirstApp.defaultProps = {
    title: 'No hay título',
    name: 'Matías Fernández'
}