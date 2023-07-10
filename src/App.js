import Board from './components/Board';
import './App.css';
import { React, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BoardSignUp from './routes/register/components/BoardSignUp'
import BoardTrello from './routes/trello/components/BoardTrello';
import ProtectedRoute from './components/ProtectedRoute';
import { UserContext } from './auth/UserContext';
import  PUBLIC_URL  from './config.js';
/**
 esta es una variable de entorno, la cual toma como valor lo que tengo defenido en el archivo package.json en el atributo homepage,
 es decir la dirección raiz, que al correr build react sustituye esta variable por la que esta ya definida en el archivo mencionado
 */


function App() {
  console.log(PUBLIC_URL)
  const [globalState, setGlobalState] = useState({ isAuthenticate: false, userId: null });
  const router = createBrowserRouter([
    {
      path: PUBLIC_URL,
      element: <Board />,
      errorElement: <h1>page not found</h1>
    },
    {
      path: PUBLIC_URL+"/register",
      element: <BoardSignUp />
    },
    {
      path: PUBLIC_URL+"/trello",
      element: (
        <ProtectedRoute >
          <BoardTrello />
        </ProtectedRoute>
      )
    }
  ]);

  return (

    <UserContext.Provider value={{ globalState, setGlobalState }}>
      <RouterProvider router={router}></RouterProvider>
    </UserContext.Provider>

  );
}

export default App;
