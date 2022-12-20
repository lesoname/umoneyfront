import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import Home from './components/home';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Routes>
            <Route exact path='/create' element={<Create/>}/>
            <Route exact path='/read' element={<Read/>}/>
            <Route exact path='/update' element={<Update/>}/>
            <Route exact path='/' element={<Home/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
