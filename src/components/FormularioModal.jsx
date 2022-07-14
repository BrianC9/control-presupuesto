import { useState } from 'react';
import cerrarModalIcon from '../img/cerrar.svg';

function FormularioModal({ setClickedModal, categorias_gastos }) {
  const [gasto, setGasto] = useState({
    concepto: '',
    cantidad: '',
    categoria: '',
  });
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const handleChange = (e) => {
    const { id, value } = e.target;
    console.log(id, value);
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

    console.log('Gasto agregado');
  };
  return (
    <div className='modal' onSubmit={handleSubmitSpend}>
      <div className={'cerrar-modal'}>
        <img
          src={cerrarModalIcon}
          alt='cerrar modal button'
          onClick={() => setClickedModal(false)}
        />
      </div>
      <form className='formulario animar'>
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
