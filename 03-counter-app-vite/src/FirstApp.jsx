//rafc para crear el reactArrowFunctionComponent
//import { Fragment } from 'react'; //esto se reemplaza con <>
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const getMessage = (usuario) =>{
  return "Hola " + usuario +", bienvenido!!!";
}

const newMessage = {
    message: 'Hola Mundo',
    name: 'Federico'
}

export const FirstApp = ( { title, subtitle, name } ) => {

  //console.log(props);
  if (!title){
    throw new Error('El title no existe');
  }

  return (
    // <Fragment>
    //esto <> reemplaza al <Fragment>
    <> 
      {getMessage(name)}
      <h1>{ title }</h1>
        {/* <code>{ JSON.stringify( newMessage ) }</code> */}
      <p>{ subtitle }</p>
    </>
    // </Fragment>
  )
}

FirstApp.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
  name: 'Federico Mazzei',
  subtitle: 'No hay subtitulo',
  title: 'No hay titulo',
}