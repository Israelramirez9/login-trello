import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BoardSignUp from './routes/register/components/BoardSignUp'
import BoardTrello from './routes/trello/components/BoardTrello';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>page not found</h1>
  },
  {
    path: "/register",
    element:<BoardSignUp></BoardSignUp>
  },
  {
    path:"/trello",
    element:<BoardTrello></BoardTrello>
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

