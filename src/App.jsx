import { useEffect, useState } from 'react';
import nuevoGastoIcon from './img/nuevo-gasto.svg';
import Header from './components/Header';
import ListadoGastos from './components/ListadoGastos';

import FormularioModal from './components/FormularioModal';
import Filtros from './components/Filtros';
function App() {
  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem('presupuesto')) ?? 0
  );
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [clickedModal, setClickedModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [listaGastos, setListaGastos] = useState(
    JSON.parse(localStorage.getItem('listaGastos')) ?? []
  );
  const [gastoSeleccionadoEditar, setGastoSeleccionadoEditar] = useState({});
  const [filtro, setFiltro] = useState('');
  const [gastosFiltrados, setGastosFiltrados] = useState([]);
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
    localStorage.setItem('presupuesto', presupuesto);
  }, [presupuesto]);
  useEffect(() => {
    const presupuestoLS = Number(localStorage.getItem('presupuesto'));
    if (presupuestoLS > 0) setIsValidPresupuesto(true);
  }, []);
  useEffect(() => {
    localStorage.setItem('listaGastos', JSON.stringify(listaGastos));
  }, [listaGastos]);
  useEffect(() => {
    if (filtro) {
      console.log(`Filtrando por ${filtro}`);
      const gastosFiltrados = listaGastos.filter(
        (gasto) => gasto.categoria === filtro
      );
      setGastosFiltrados(gastosFiltrados);
    }
  }, [filtro]);
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
        <main>
          <Filtros
            categorias_gastos={CATEGORIAS_GASTOS}
            filtro={filtro}
            setFiltro={setFiltro}
          />
          <ListadoGastos
            listaGastos={listaGastos}
            setGastoSeleccionadoEditar={setGastoSeleccionadoEditar}
            setListaGastos={setListaGastos}
            handleEliminarGasto={handleEliminarGasto}
            gastosFiltrados={gastosFiltrados}
            filtro={filtro}
          />

          <div className='nuevo-gasto'>
            <img
              src={nuevoGastoIcon}
              alt='icono de agregar nuevo gasto'
              onClick={handleAgregarGasto}
            />
          </div>
        </main>
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
