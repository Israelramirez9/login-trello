import Board from './components/Board';
import './App.css';
import { React, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BoardSignUp from './routes/register/components/BoardSignUp'
import BoardTrello from './routes/trello/components/BoardTrello';
import ProtectedRoute from './components/ProtectedRoute';
import { UserContext } from './auth/UserContext';

function App() {
  const [globalState, setGlobalState] = useState({isAuthenticate:false,userId:null});
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Board />,
      errorElement: <h1>page not found</h1>
    },
    {
      path: "/register",
      element: <BoardSignUp />
    },
    {
      path: "/trello",
      element: (
        <ProtectedRoute >
          <BoardTrello />
        </ProtectedRoute>
      )
    }    
  ]);
   
  return (

    <UserContext.Provider value={{ globalState, setGlobalState}}>
      <RouterProvider router={router}></RouterProvider>
    </UserContext.Provider>

  );
}

export default App;
