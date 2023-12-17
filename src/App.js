import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './routes/Home';
import About from './routes/About';

function App() {
  return (
    <div>
      <nav>
        <ul id="navigation">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>

    </div>
  );
}

export default App;
