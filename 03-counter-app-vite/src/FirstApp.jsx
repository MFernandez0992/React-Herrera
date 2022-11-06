import PropTypes from 'prop-types';

export const FirstApp = ( { title, subtitle } ) => {



    return(
        <>
            <h1>{ title }</h1>
            <h2>{ subtitle }</h2>
            <p>Soy desarrollador web</p>
        </>
    );
}

// PropTypes - Permiten seleccionar los tipos de las props y hacerlas obligatorias o no
FirstApp.propTypes = {
    title: PropTypes.string.isRequired
}

// DefaultProps
FirstApp.defaultProps = {
    title: 'No hay title',
    subtitle: 'No hay subtitle'
}