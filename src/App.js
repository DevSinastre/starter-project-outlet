import './App.css';
// import { Link, Route, Routes } from 'react-router-dom';
import React from 'react';
// import Home from './routes/Home';
// import About from './routes/About';

import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>React Router com Outlet</h1>
      <Outlet/>
      <h2>rodapé</h2>
      {/* <nav>
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
      </Routes> */}

    </div>
  );
}

export default App;
