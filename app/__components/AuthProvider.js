"use client";
import React, { useEffect, useState } from "react";
const user_context = React.createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("classroom-management-user"));
    data && setUser(data);
  }, []);

  const login = (person) => {
    setUser(person);
    localStorage.setItem('classroom-management-user', JSON.stringify(person));
  };

  const logout = () => {
    localStorage.setItem('classroom-management-user', JSON.stringify(null));
    setUser(null);
  };

  const value = { user, login, logout };


  return (
    <user_context.Provider value={value}>
      { children }
    </user_context.Provider>
  );
}


export const useAuth = () => {
  return React.useContext(user_context);
};