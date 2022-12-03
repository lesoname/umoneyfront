import './App.css';
import Create from './components/create';


function App() {
  return (
    <div className="App">
      <div className="position-absolute top-50 start-50 translate-middle">
        <div className="fs-1 mb-3">
          uMoney App
        </div>
        <div>
          <Create/>
        </div>
      </div>
    </div>
  );
}

export default App;
