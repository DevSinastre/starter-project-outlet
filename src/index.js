import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ErrorPage from './routes/ErrorPage';
import GetPokemons from './routes/GetPokemons';
import PokemonDetails from './routes/PokemonDetails'

const router = createBrowserRouter([
  {
    path: "/starter-project-outlet",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/starter-project-outlet/",
        element: <GetPokemons />
      },
      {
        path: "/starter-project-outlet/:id",
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