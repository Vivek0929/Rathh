import React, { useState } from 'react';
import { API_BASE } from '../utils/apiBase';

function LoginModal({ onSuccess, onClose }) {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/userdetails/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier, password })
      });
      const data = await res.json();
      if (res.ok && data.user) {
        onSuccess(data.user);
      } else {
        setError(data.message || 'Invalid credentials');
      }
    } catch {
      setError('Error connecting to server');
    }
    setLoading(false);
  };

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
      background: 'rgba(0,0,0,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000
    }}>
      <form onSubmit={handleSubmit} style={{
        background: '#fff', padding: 32, borderRadius: 12, minWidth: 340, boxShadow: '0 2px 16px #bbb', display: 'flex', flexDirection: 'column', gap: 18
      }}>
        <h2 style={{margin:0}}>Admin Login</h2>
        {error && <div style={{ color: 'red', fontWeight: 500 }}>{error}</div>}
        <input
          placeholder="Username / Email / Mobile"
          value={identifier}
          onChange={e => setIdentifier(e.target.value)}
          style={{ padding: 10, borderRadius: 6, border: '1px solid #ccc', fontSize: 16 }}
          autoFocus
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{ padding: 10, borderRadius: 6, border: '1px solid #ccc', fontSize: 16 }}
        />
        <button type="submit" disabled={loading} style={{ padding: '10px 0', borderRadius: 6, background: '#6c63ff', color: '#fff', fontWeight: 600, border: 'none', fontSize: 16, cursor: 'pointer' }}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
        {onClose && <button type="button" onClick={onClose} style={{ background: 'none', border: 'none', color: '#888', marginTop: 8, cursor: 'pointer' }}>Cancel</button>}
      </form>
    </div>
  );
}

export default LoginModal;
