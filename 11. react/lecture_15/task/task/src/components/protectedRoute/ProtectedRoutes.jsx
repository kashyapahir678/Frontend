import React, { useContext } from 'react'
import { useAuth } from '../../context/AuthContext'
import { Navigate } from 'react-router-dom'

const ProtectedRoutes = ({children}) => {

   const {isAuth} = useAuth()

  return (
       <div>
          {
            isAuth ? children : <Navigate to="/login"></Navigate>
          }
       </div>
  )
}

export default ProtectedRoutes