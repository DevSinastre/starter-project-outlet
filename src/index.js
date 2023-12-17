import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider, HashRouter } from 'react-router-dom';

import Home from './routes/Home';
import About from './routes/About';
import ErrorPage from './routes/ErrorPage';
import GetPokemons from './routes/GetPokemons';
import PokemonDetails from './routes/PokemonDetails'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home/>
//   },
//   {
//     path: "/about",
//     element: <About/>
//   }
// ])
const router = createBrowserRouter([
  {
    path: "/starter-project-outlet",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/starter-project-outlet",
        element: <Home />
      },
      {
        path: "/starter-project-outlet/about",
        element: <About />
      },
      {
        path: "/starter-project-outlet/pokemons",
        element: <GetPokemons />
      },
      {
        path: "/starter-project-outlet/pokemons/:id",
        element: <PokemonDetails />
      },
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
      <RouterProvider router={router} />
    
  </React.StrictMode>
);

reportWebVitals();