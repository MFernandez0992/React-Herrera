import PropTypes from 'prop-types';

const getSaludo = () => 'Hola Matías'

const FirstApp = ( { title } ) => {  
  return (
    <>
      <h1>{ getSaludo() }</h1>
      <p>{ title }</p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
  title: 'No hay título',
}

export default FirstApp