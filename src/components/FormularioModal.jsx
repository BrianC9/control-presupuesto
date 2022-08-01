import { useEffect, useState } from 'react';
import cerrarModalIcon from '../img/cerrar.svg';
import Mensaje from './Mensaje';
import {
  generarId,
  capitalizeFirstLetter,
  formatDate,
} from '../utils/index.js';
function FormularioModal({
  listaGastos,
  setClickedModal,
  categorias_gastos,
  animarModal,
  setAnimarModal,
  setListaGastos,
  gastoSeleccionadoEditar,
  setGastoSeleccionadoEditar,
}) {
  const [gasto, setGasto] = useState({
    concepto: '',
    cantidad: '',
    categoria: '',
  });
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    if (Object.keys(gastoSeleccionadoEditar).length > 0) {
      const { concepto, cantidad, categoria } = gastoSeleccionadoEditar;
      setGasto({ concepto, cantidad, categoria });
      console.log(gastoSeleccionadoEditar);
    }
  }, []);
  const ocultarModal = () => {
    setGastoSeleccionadoEditar({});
    setGasto({
      concepto: '',
      cantidad: '',
      categoria: '',
    });
    setAnimarModal(false);
    setTimeout(() => {
      setClickedModal(false);
    }, 500);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setGasto((prevData) => {
      return {
        ...prevData,
        [id]: id === 'cantidad' ? Number(value) : value,
      };
    });
  };
  const handleSubmitSpend = (e) => {
    e.preventDefault();

    //Validaciones
    if ([gasto.cantidad, gasto.categoria, gasto.concepto].includes('')) {
      setMensaje('Todos los campos son obligatorios');
      setTimeout(() => {
        setMensaje('');
      }, 2500);
      return;
    }
    // Editar un gasto seleccionado

    if (gastoSeleccionadoEditar.concepto) {
      console.log(' ');
      const gastoState = structuredClone(gasto);
      gastoState.id = gastoSeleccionadoEditar.id;
      const gastosActualizados = listaGastos.map((gastoIterado) =>
        gastoIterado.id === gastoSeleccionadoEditar.id
          ? gastoState
          : gastoIterado
      );
      setListaGastos(gastosActualizados);

      setGastoSeleccionadoEditar({});
      ocultarModal();

      return;
    }

    // Functionality after submit the expense
    ocultarModal();
    setListaGastos((prev) => {
      return [
        ...prev,
        {
          ...gasto,
          id: generarId(),
          fecha: formatDate(Date.now()),
        },
      ];
    });
  };
  return (
    <div className='modal' onSubmit={handleSubmitSpend}>
      <div className={'cerrar-modal'}>
        <img
          src={cerrarModalIcon}
          alt='cerrar modal button'
          onClick={ocultarModal}
        />
      </div>
      <form className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}>
        {mensaje && <Mensaje tipo={'error'}>{mensaje}</Mensaje>}

        <legend>
          {gastoSeleccionadoEditar.concepto ? 'Editar gasto' : 'Nuevo gasto'}
        </legend>
        <div className='campo'>
          <label htmlFor='concepto'>Concepto de gasto</label>
          <input
            type='text'
            id='concepto'
            onChange={handleChange}
            placeholder='Concepto del gasto'
            value={gasto.concepto}
          />
        </div>
        <div className='campo'>
          <label htmlFor='cantidad'>Cantidad</label>
          <input
            id='cantidad'
            type='number'
            onChange={handleChange}
            placeholder='Cantidad'
            value={gasto.cantidad}
          />
        </div>
        <div className='campo'>
          <label htmlFor='categoria'>Categoría</label>
          <select
            id='categoria'
            onChange={handleChange}
            value={gasto.categoria}
          >
            <option hidden value={''}>
              Selecciona una categoría
            </option>
            {categorias_gastos.map((cat) => {
              return (
                <option key={cat} value={cat}>
                  {capitalizeFirstLetter(cat)}
                </option>
              );
            })}
          </select>
        </div>
        <input
          type={'submit'}
          value={
            gastoSeleccionadoEditar.concepto
              ? 'Confirmar cambios'
              : 'Nuevo gasto'
          }
        />
      </form>
    </div>
  );
}

export default FormularioModal;
