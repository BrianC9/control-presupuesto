import React from 'react';
import NuevoPresupuesto from './NuevoPresupuesto';

function Header({
  presupuesto,
  setPresupuesto,
  isValidPresupuesto,
  setIsValidPresupuesto,
}) {
  return (
    <header>
      {isValidPresupuesto ? (
        <>
          <h1>Controla tus gastos</h1>
          <p>Aqui tu sobrante etc</p>
        </>
      ) : (
        <>
          <h1>Control de presupuesto</h1>
          <NuevoPresupuesto
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            isValidPresupuesto={isValidPresupuesto}
            setIsValidPresupuesto={setIsValidPresupuesto}
          />
        </>
      )}
    </header>
  );
}

export default Header;
