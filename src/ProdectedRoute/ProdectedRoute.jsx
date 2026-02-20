import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthProvider'
import { Navigate } from 'react-router-dom';

function ProdectedRoute({children,allowedRoles}) {

    const {isAuthenticated,userRole} = useContext(AuthContext)

     // Not logged in
  if (!isAuthenticated) {
    return <Navigate to="/user-login" />;
  }

   // Role not allowed
  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" />;
  }
  return children;

  return (
    <div>ProdectedRoute</div>
  )
}

export default ProdectedRoute
