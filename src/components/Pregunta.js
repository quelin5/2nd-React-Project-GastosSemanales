import React, {Fragment, useState} from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Pregunta = ({guardarPresupuesto, guardarRestante, actualizarPregunta}) => {

    //Definir el State
    const [cantidad, guardarCantidad] = useState(0); //un 0 porque es una cantidad. 
    const [error, guardarError] = useState(false);

    //Funcion que lee el presupuesto
    const definirPresupuesto = e => {
        guardarCantidad(parseInt(e.target.value))
    }

    //Submit para definir el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();

        //Validar
        if (cantidad < 1 || isNaN(cantidad)){
            guardarError(true);
            return;
        }

        //Si se pasa a validación 
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);
    }

    return(
        <Fragment>
            <h2>¿Cuál es tu presupuesto?</h2>

            {error ? <Error mensaje='El presupuesto es incorrecto' /> : null} 

            <form
                onSubmit={agregarPresupuesto}
            >

                <input
                type='number'
                className='u-full-width'
                placeholder='Presupuesto'
                onChange={definirPresupuesto}
                />

                <input
                type='submit'
                className='button-primary u-full-width'
                value='Introducir presupuesto'
                />
            </form>
        </Fragment>
    )
}

Pregunta.propTypes = {
    guardarPresupuesto: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired,
    actualizarPregunta: PropTypes.func.isRequired,
}

export default Pregunta