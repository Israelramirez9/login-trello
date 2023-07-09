import { React ,useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../auth/UserContext'

export default function ProtectedRoute({children}) {
    
    const {globalState}=useContext(UserContext)
    
    return globalState.isAuthenticate ?  children : <Navigate to="/" />

}
