import React, { useEffect, useState, createContext, useContext } from 'react';
import { users } from '../utils/mockData';
interface User {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
}
interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);
export const AuthProvider: React.FC<{
  children: React.ReactNode;
}> = ({
  children
}) => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    // Check for saved user in localStorage
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);
  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call
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
  const signup = async (name: string, email: string, password: string): Promise<boolean> => {
    // Check if email already exists
    const userExists = users.some(u => u.email === email);
    if (userExists) {
      return false;
    }
    // Simulate API call to create new user
    const newUser = {
      id: users.length + 1,
      name,
      email,
      password,
      isAdmin: false
    };
    // In a real app, this would be an API call
    users.push(newUser);
    // Log in the new user
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
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};