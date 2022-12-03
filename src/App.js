import './App.css';
import Create from './components/create';


function App() {
  return (
    <div className="App">
      <div class="fs-2 p-5 position-absolute top-0 start-50 translate-middle-x">
        React Crud Operations
        <div>
          <Create/>
        </div>
      </div>
    </div>
  );
}

export default App;
