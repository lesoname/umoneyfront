import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'



function App() {
  return (
    <Router>
      <div className="App">
        <div className="position-absolute top-50 start-50 translate-middle">
          <div>
            <Routes>
              <Route exact path='/create' element={<Create/>}/>
              <Route exact path='/read' element={<Read/>}/>
              <Route exact path='/update' element={<Update/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
