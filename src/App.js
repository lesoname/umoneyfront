import './App.css';
import Create from './components/create';


function App() {
  return (
    <div className="App">
      <div class="position-absolute top-50 start-50 translate-middle">
        <div class="fs-3">
          React Crud Operations
          </div>
        <div>
          <Create/>
        </div>
      </div>
    </div>
  );
}

export default App;
