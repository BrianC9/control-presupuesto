import React from 'react';

function ControlPresupuesto({ presupuesto }) {
  const formatToMoney = (number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'EUR',
    }).format(number);
  };
  return (
    <div className='contenedor-presupuesto sombra contenedor dos-columnas'>
      <div>
        <p>Grafica gastos</p>
      </div>
      <div className='contenido-presupuesto'>
        <p>
          <span>Presupuesto: </span> {formatToMoney(presupuesto)}
        </p>
        <p>
          <span>Disponible: </span> 100€
        </p>
        <p>
          <span>Gastado: </span> 100€
        </p>
      </div>
    </div>
  );
}

export default ControlPresupuesto;
