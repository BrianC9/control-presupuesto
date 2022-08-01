import React from 'react';
import Gasto from './Gasto';

function ListadoGastos({
  listaGastos,
  setListaGastos,
  setGastoSeleccionadoEditar,
  handleEliminarGasto,
}) {
  return (
    <div className={'listado-gastos contenedor'}>
      <h2>{listaGastos.length > 0 ? 'Gastos' : 'No hay gastos'}</h2>
      {listaGastos.map((gasto) => {
        return (
          <Gasto
            key={gasto.id}
            gasto={gasto}
            setGastoSeleccionadoEditar={setGastoSeleccionadoEditar}
            setListaGastos={setListaGastos}
            listaGastos={listaGastos}
            handleEliminarGasto={handleEliminarGasto}
          />
        );
      })}
    </div>
  );
}

export default ListadoGastos;
