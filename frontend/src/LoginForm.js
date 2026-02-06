import React, { useState } from 'react';

function LoginForm({ onLogin, switchToRegister }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!email || !password) {
      setError('All fields required.');
      return;
    }
    try {
      const res = await fetch('http://localhost:4000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Login failed');
      onLogin(data.token);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="card">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} type="email" />
        <input placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} type="password" />
        <button type="submit">Login</button>
      </form>
      {error && <div className="error">{error}</div>}
      <button type="button" className="secondary-button" onClick={switchToRegister}>Don't have an account? Register</button>
    </div>
  );
}

export default LoginForm;