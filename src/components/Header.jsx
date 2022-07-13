import React from 'react';
import ControlPresupuesto from './ControlPresupuesto';
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
          <h1>Controla tu presupuesto</h1>
          <ControlPresupuesto presupuesto={presupuesto} />
        </>
      ) : (
        <>
          <h1>Nuevo presupuesto</h1>
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
