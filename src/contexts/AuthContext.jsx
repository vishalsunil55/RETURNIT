import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext({
  user: null,
  token: null,
  login: async (credentials) => {},
  logout: () => {},
  loading: true
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // On mount: attempt to restore session (e.g. from localStorage)
    const savedToken = localStorage.getItem('token');
    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (savedToken && savedUser) {
      setToken(savedToken);
      setUser(savedUser);
    }
    setLoading(false);
  }, []);

  const login = async (credentials) => {
    // TODO: call your login API, get token & user
    // Example:
    // const response = await authService.login(credentials);
    // setToken(response.token);
    // setUser(response.user);
    // localStorage.setItem('token', response.token);
    // localStorage.setItem('user', JSON.stringify(response.user));
    // For now stub:
    setToken('dummy-token');
    setUser({ id: '1', name: 'Demo User', role: 'user' });
    localStorage.setItem('token', 'dummy-token');
    localStorage.setItem('user', JSON.stringify({ id: '1', name: 'Demo User', role: 'user' }));
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
