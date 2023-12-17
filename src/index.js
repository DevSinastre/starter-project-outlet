import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider, HashRouter } from 'react-router-dom';

import Home from './routes/Home';
import About from './routes/About';

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
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/about",
        element: <About/>
      }
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
      <RouterProvider router={router}/>
   
  </React.StrictMode>
);

reportWebVitals();