import { useEffect, useState } from 'react';
import nuevoGastoIcon from './img/nuevo-gasto.svg';
import Header from './components/Header';
import ListadoGastos from './components/ListadoGastos';

import FormularioModal from './components/FormularioModal';
function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [clickedModal, setClickedModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [listaGastos, setListaGastos] = useState([]);
  const [gastoSeleccionadoEditar, setGastoSeleccionadoEditar] = useState({});
  const CATEGORIAS_GASTOS = [
    'comida',
    'suscripciones',
    'ocio',
    'salud',
    'casa',
    'varios',
    'ahorro',
  ];

  useEffect(() => {
    if (Object.keys(gastoSeleccionadoEditar).length > 0) {
      console.log('Abro el modal desde el swipe');
      handleAgregarGasto();
    }
  }, [gastoSeleccionadoEditar]);
  const handleAgregarGasto = () => {
    setClickedModal(true);
    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  };
  const handleEliminarGasto = (id) => {
    const listaGastosActualizada = listaGastos.filter(
      (gastoIterado) => gastoIterado.id !== id
    );
    setListaGastos(listaGastosActualizada);
  };
  return (
    <div className={clickedModal ? 'fijar' : ''}>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
        listaGastos={listaGastos}
      />
      {isValidPresupuesto && (
        <>
          <ListadoGastos
            listaGastos={listaGastos}
            setGastoSeleccionadoEditar={setGastoSeleccionadoEditar}
            setListaGastos={setListaGastos}
            handleEliminarGasto={handleEliminarGasto}
          />

          <div className='nuevo-gasto'>
            <img
              src={nuevoGastoIcon}
              alt='icono de agregar nuevo gasto'
              onClick={handleAgregarGasto}
            />
          </div>
        </>
      )}

      {clickedModal && (
        <FormularioModal
          setClickedModal={setClickedModal}
          categorias_gastos={CATEGORIAS_GASTOS}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          listaGastos={listaGastos}
          setListaGastos={setListaGastos}
          gastoSeleccionadoEditar={gastoSeleccionadoEditar}
          setGastoSeleccionadoEditar={setGastoSeleccionadoEditar}
        />
      )}
    </div>
  );
}

export default App;
