import { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { formatToMoney } from '../utils/index.js';
function ControlPresupuesto({ presupuesto, listaGastos }) {
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);
  const [porcentaje, setPorcentaje] = useState(0);
  const azulCss = '#3b82f6';
  const grisClaroCss = '#f5f5f5';
  useEffect(() => {
    const totalGastado = listaGastos.reduce(
      (total, gasto) => gasto.cantidad + total,
      0
    );
    setGastado(totalGastado);
    const totalDisponible = presupuesto - totalGastado;
    setDisponible(totalDisponible);
    const porcentajeDisponible = (
      ((presupuesto - totalDisponible) / presupuesto) *
      100
    ).toFixed(2);
    setTimeout(() => {
      setPorcentaje(porcentajeDisponible);
    }, 500);
  }, [listaGastos]);
  return (
    <div className='contenedor-presupuesto sombra contenedor dos-columnas'>
      <div>
        <CircularProgressbar
          value={porcentaje}
          text={`Gastado:${' '}${porcentaje} %`}
          styles={buildStyles({
            pathColor: azulCss,
            textColor: azulCss,
            backgroundColor: grisClaroCss,
          })}
        />
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
