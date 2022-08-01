import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';
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
function Gasto({
  gasto,
  setGastoSeleccionadoEditar,
  setListaGastos,
  listaGastos,
  handleEliminarGasto,
}) {
  const { cantidad, concepto, categoria, fecha, id } = gasto;

  const leadingActions = (e) => (
    <LeadingActions>
      <SwipeAction onClick={() => setGastoSeleccionadoEditar(gasto)}>
        Editar
      </SwipeAction>
    </LeadingActions>
  );

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction
        onClick={() => handleEliminarGasto(gasto.id)}
        destructive={true}
      >
        Eliminar
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className='gasto sombra'>
          <div className='contenido-gasto'>
            <img src={iconsCategoria[categoria]} />
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
      </SwipeableListItem>
    </SwipeableList>
  );
}

export default Gasto;
