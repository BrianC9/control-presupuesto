import { useState } from 'react';
import nuevoCastoIcon from './img/nuevo-gasto.svg';
import Header from './components/Header';
import FormularioModal from './components/FormularioModal';
function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [clickedModal, setClickedModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [listaGastos, setListaGastos] = useState([]);
  const CATEGORIAS_GASTOS = [
    'comida',
    'suscripciones',
    'transporte',
    'facturas',
    'ocio',
    'salud',
  ];
  const handleAgregarGasto = () => {
    setClickedModal(true);
    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  };
  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />
      {isValidPresupuesto && (
        <div className='nuevo-gasto'>
          <img
            src={nuevoCastoIcon}
            alt='icono de agregar nuevo gasto'
            onClick={handleAgregarGasto}
          />
        </div>
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
        />
      )}
    </div>
  );
}

export default App;
