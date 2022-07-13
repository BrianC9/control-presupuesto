import { useState } from 'react';
import nuevoCastoIcon from './img/nuevo-gasto.svg';
import Header from './components/Header';
import FormularioModal from './components/FormularioModal';
function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [clickedModal, setClickedModal] = useState(false);
  const CATEGORIAS_GASTOS = [
    'comida',
    'suscripciones',
    'transporte',
    'facturas',
    'ocio',
    'salud',
  ];
  const handleAgregarGasto = () => {
    console.log('Agregar gasto');
    setClickedModal(true);
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
        />
      )}
    </div>
  );
}

export default App;
