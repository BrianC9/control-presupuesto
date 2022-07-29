import { useState } from 'react';
import cerrarModalIcon from '../img/cerrar.svg';
import Mensaje from './Mensaje';
import { generarId } from '../utils/index.js';
function FormularioModal({
  setClickedModal,
  categorias_gastos,
  animarModal,
  setAnimarModal,
  presupuesto,
  setPresupuesto,
  listaGastos,
  setListaGastos,
}) {
  const [gasto, setGasto] = useState({
    concepto: '',
    cantidad: '',
    categoria: '',
  });
  const [mensaje, setMensaje] = useState('');
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const ocultarModal = () => {
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
    //

    // Limpieza  de formulario y cerrar modal after submit
    ocultarModal();
    setListaGastos((prev) => {
      return [...prev, { ...gasto, id: generarId() }];
    });
    setGasto({
      concepto: '',
      cantidad: '',
      categoria: '',
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

        <legend>Nuevo gasto</legend>
        <div className='campo'>
          <label htmlFor='concepto'>Concepto de gasto</label>
          <input
            type='text'
            id='concepto'
            onChange={handleChange}
            placeholder='Concepto del gasto'
          />
        </div>
        <div className='campo'>
          <label htmlFor='cantidad'>Cantidad</label>
          <input
            id='cantidad'
            type='number'
            onChange={handleChange}
            placeholder='Cantidad'
          />
        </div>
        <div className='campo'>
          <label htmlFor='categoria'>Categoría</label>
          <select id='categoria' onChange={handleChange}>
            <option hidden value={''}>
              Selecciona una categoía
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
        <input type={'submit'} value={'Agregar gasto'} />
      </form>
    </div>
  );
}

export default FormularioModal;
