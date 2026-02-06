import React, { useState } from 'react';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';

function App() {
  // authMode: 'login' | 'register' | 'dashboard'
  const [authMode, setAuthMode] = useState(() => {
    // If token exists, go to dashboard
    return localStorage.getItem('token') ? 'dashboard' : 'login';
  });
  const [token, setToken] = useState(() => localStorage.getItem('token') || '');

  const handleLogin = (jwt) => {
    setToken(jwt);
    localStorage.setItem('token', jwt);
    setAuthMode('dashboard');
  };
  const handleRegister = () => {
    setAuthMode('login');
  };
  const handleLogout = () => {
    setToken('');
    localStorage.removeItem('token');
    setAuthMode('login');
  };

  return (
    <div className="App centered-container">
      {authMode === 'register' && (
        <RegisterForm onRegister={handleRegister} switchToLogin={() => setAuthMode('login')} />
      )}
      {authMode === 'login' && (
        <LoginForm onLogin={handleLogin} switchToRegister={() => setAuthMode('register')} />
      )}
      {authMode === 'dashboard' && (
        <Dashboard token={token} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;
