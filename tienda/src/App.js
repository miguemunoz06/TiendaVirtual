import logo from './logo.svg';
import './App.css';
import Productos from './Productos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Tienda Virtual
        </p>
        <Productos />
        
    
      </header>
    </div>
  );
}

export default App;
