import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
  const isAuthentiCated = localStorage.getItem("userTokens") 

  return isAuthentiCated ? <Outlet/> : <Navigate to="/login"/>
}

export default ProtectedRoutes