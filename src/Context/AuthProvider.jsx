import React, { createContext, useEffect, useState } from 'react'


export const AuthContext = createContext()

export const AuthProvider = ({children}) => {

    const [userId, setUserId] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [token, setToken] = useState(null);

  // ✅ Load from localStorage on first render
  useEffect(() => {
    const storedUser = localStorage.getItem("auth");

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserId(parsedUser.userId);
      setUserRole(parsedUser.userRole);
      setToken(parsedUser.token);
    }
  }, []);

  // ✅ Login
  const login = ({ userId, userRole, token }) => {
    setUserId(userId);
    setUserRole(userRole);
    setToken(token);

    localStorage.setItem(
      "auth",
      JSON.stringify({ userId, userRole, token })
    );
  };

  // ✅ Logout
  const logout = () => {
    setUserId(null);
    setUserRole(null);
    setToken(null);

    localStorage.removeItem("auth");
  };

  const isAuthenticated = !!token;



  return (
   <AuthContext.Provider
    value={{
        userId,
        userRole,
        token,
        login,
        logout,
        isAuthenticated,
      }}
   >
    {children}

   </AuthContext.Provider>
  )
}
