import React, { useState } from 'react';

function RegisterForm({ onRegister, switchToLogin }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!username || !email || !password) {
      setError('All fields required.');
      return;
    }
    try {
      const res = await fetch('http://localhost:4000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Registration failed');
      onRegister();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="card">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} type="email" />
        <input placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} type="password" />
        <button type="submit">Register</button>
      </form>
      {error && <div className="error">{error}</div>}
      <button type="button" className="secondary-button" onClick={switchToLogin}>Already have an account? Login</button>
    </div>
  );
}

export default RegisterForm;