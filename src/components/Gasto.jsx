import React from 'react';
import { capitalizeFirstLetter } from '../utils/index.js';
import IconoAhorro from '../img/icono_ahorro.svg';
import IconoComida from '../img/icono_comida.svg';
import IconoCasa from '../img/icono_casa.svg';
import IconoGastos from '../img/icono_gastos.svg';
import IconoOcio from '../img/icono_ocio.svg';
import IconoSalud from '../img/icono_salud.svg';
import IconoSuscripciones from '../img/icono_suscripciones.svg';

const iconsCategoria = {
  casa: IconoCasa,
  ahorro: IconoAhorro,
  comida: IconoComida,
  varios: IconoGastos,
  ocio: IconoOcio,
  salud: IconoSalud,
  suscripciones: IconoSuscripciones,
};
function Gasto({ gasto }) {
  const { cantidad, concepto, categoria, fecha } = gasto;
  return (
    <div className='gasto sombra'>
      <div className='contenido-gasto'>
        <img src={iconsCategoria[categoria]} />
        {console.log(`Icono${capitalizeFirstLetter(categoria)}`)}
        <div className='descripcion-gasto'>
          <p className='categoria'>{categoria}</p>
          <p className='nombre-gasto'>{capitalizeFirstLetter(concepto)}</p>
          <p className='fecha-gasto'>
            <span>{fecha}</span>{' '}
          </p>
        </div>
      </div>
      <p className='cantidad-gasto'>€ {cantidad} </p>
    </div>
  );
}

export default Gasto;
