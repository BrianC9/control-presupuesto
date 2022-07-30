import { useEffect, useState } from 'react';

import { formatToMoney } from '../utils/index.js';
function ControlPresupuesto({ presupuesto, listaGastos }) {
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);

  useEffect(() => {
    const totalGastado = listaGastos.reduce(
      (total, gasto) => gasto.cantidad + total,
      0
    );
    setGastado(totalGastado);
    const totalDisponible = presupuesto - totalGastado;
    setDisponible(totalDisponible);
  }, [listaGastos]);
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
          <span>Disponible: </span> {formatToMoney(disponible)}
        </p>
        <p>
          <span>Gastado: </span> {formatToMoney(gastado)}
        </p>
      </div>
    </div>
  );
}

export default ControlPresupuesto;
