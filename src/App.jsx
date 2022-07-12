import Header from './components/Header';
import casa from './img/icono_casa.svg';
function App() {
  return (
    <div>
      <Header />
      <h1>Hola mundo</h1>
      <img src={casa} width={50} />
    </div>
  );
}

export default App;
