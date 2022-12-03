import './App.css';
import Create from './components/create';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'



function App() {
  return (
    <Router>
      <div className="App">
        <div className="position-absolute top-50 start-50 translate-middle">
          <div className="fs-1 mb-3">
            uMoney App
          </div>
          <div>
            <Routes>
              <Route exact path='/create' element={<Create/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
