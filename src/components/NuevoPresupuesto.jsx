import React, { useState } from 'react';
import Mensaje from './Mensaje';

function NuevoPresupuesto({
  presupuesto,
  setPresupuesto,
  isValidPresupuesto,
  setIsValidPresupuesto,
}) {
  const [mensaje, setMensaje] = useState('');
  const handleSubmitPresupuesto = (e) => {
    e.preventDefault();

    //Validacion
    if (!presupuesto || presupuesto <= 0) {
      setMensaje('No es un presupuesto válido');
      setIsValidPresupuesto(false);
      return;
    }
    setMensaje('');
    setIsValidPresupuesto(true);
  };
  return (
    <div className='contenedor-presupuesto sombra contenedor'>
      <form
        onSubmit={handleSubmitPresupuesto}
        className='formulario nuevo-presupuesto'
      >
        <div className='campo'>
          <label htmlFor='cantidad-presupuesto'>Fija tu presupuesto</label>
          <input
            id='cantidad-presupuesto'
            type={'number'}
            className={'nuevo-presupuesto'}
            value={presupuesto}
            onChange={(e) => {
              setPresupuesto(Number(e.target.value));
            }}
          />
        </div>
        <input type='submit' value={'Nuevo presupuesto'} />
        {mensaje && <Mensaje tipo={'error'}>{mensaje}</Mensaje>}
      </form>
    </div>
  );
}

export default NuevoPresupuesto;
