// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Body from './components/bodySection/Body';
import About from './components/aboutPage/About';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/body' element={<Body />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
