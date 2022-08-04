import { useState, useEffect } from 'react';
import { capitalizeFirstLetter } from '../utils';
function Filtros({ categorias_gastos, filtro, setFiltro }) {
  return (
    <div className='filtros sombra contenedor'>
      <form className='campo'>
        <label htmlFor='categoriaFiltrada'>Filtrar gastos</label>
        <select
          id='categoriaFiltrada'
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        >
          <option value={''}>Todos los gastos</option>
          {categorias_gastos.map((cat) => {
            return (
              <option key={cat} value={cat}>
                {capitalizeFirstLetter(cat)}
              </option>
            );
          })}
        </select>
      </form>
    </div>
  );
}

export default Filtros;
