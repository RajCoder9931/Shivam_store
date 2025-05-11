import React, { createContext, useContext, useState, useEffect } from 'react';
import { users } from '../utils/mockData';
const AuthContext = createContext();
export const AuthProvider = ({
  children
}) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);
  const login = async (email, password) => {
    const foundUser = users.find(u => u.email === email && u.password === password);
    if (foundUser) {
      const {
        password,
        ...userWithoutPassword
      } = foundUser;
      setUser(userWithoutPassword);
      localStorage.setItem('user', JSON.stringify(userWithoutPassword));
      return true;
    }
    return false;
  };
  const signup = async (name, email, password) => {
    const userExists = users.some(u => u.email === email);
    if (userExists) {
      return false;
    }
    const newUser = {
      id: users.length + 1,
      name,
      email,
      password,
      isAdmin: false
    };
    users.push(newUser);
    const {
      password: _,
      ...userWithoutPassword
    } = newUser;
    setUser(userWithoutPassword);
    localStorage.setItem('user', JSON.stringify(userWithoutPassword));
    return true;
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };
  return <AuthContext.Provider value={{
    user,
    login,
    logout,
    signup
  }}>
      {children}
    </AuthContext.Provider>;
};
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};