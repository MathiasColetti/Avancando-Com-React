import logo from './logo.svg';
import './App.css';
import eeve from './assets/eeve.png';
import ManageData from './components/ManageData';

function App() {
  return (
    <div className='App'>
      {/* Imagem em Public */}
      <h1>Avancando em React</h1>

      <img src="/eeve.png" alt="Imagem Eeve" />
      {/* Imagem Em Assests */}

      <img src={eeve} alt="Eeve" srcset="" />
      <ManageData />
    </div>

  );
}

export default App;
