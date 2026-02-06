import React, { useEffect, useState } from 'react';

function Dashboard({ token, onLogout }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('http://localhost:4000/api/dashboard', {
          headers: { 'Authorization': 'Bearer ' + token }
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Failed to load dashboard');
        setUser(data);
      } catch (err) {
        setError(err.message);
      }
    }
    fetchData();
  }, [token]);

  if (error) return (
    <div className="card">
      <h2>Dashboard</h2>
      <div className="error">{error}</div>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
  if (!user) return <div className="card">Loading...</div>;
  return (
    <div className="card">
      <h2>Dashboard</h2>
      <p>Welcome, {user.username}!</p>
      <p>Email: {user.email}</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;