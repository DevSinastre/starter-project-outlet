import './App.css';
// import { Link, Route, Routes } from 'react-router-dom';
import React from 'react';
// import Home from './routes/Home';
// import About from './routes/About';

import { Outlet } from 'react-router-dom';
import { ThemeProvider } from './contexts/themeContext';
import {ThemeTogglerButton} from './theme-toggler-button/theme-toggler-button'

function App() {
  return (
    <ThemeProvider>
      <div>
        <h1>React Router com Outlet</h1>
        <button><ThemeTogglerButton /></button>
        <Outlet />
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
    </ThemeProvider>
  );
}

export default App;
