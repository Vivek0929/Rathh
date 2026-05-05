import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './AdminPanel.css';



import { API_BASE } from '../utils/apiBase';

function AdminPanel({ onBookingSubmit }) {
  const [tab, setTab] = useState(1);
  const [events, setEvents] = useState([]);

  // Fetch events from backend on mount
  useEffect(() => {
    fetch(`${API_BASE}/eventdetails`)
      .then(res => res.json())
      .then(data => setEvents(data))
      .catch(() => setEvents([]));
  }, []);

  return (
    <div className="admin-panel">
      <div className="tabs">
        <button onClick={() => setTab(1)} className={tab===1 ? 'active' : ''}>Book Users</button>
        <button onClick={() => setTab(2)} className={tab===2 ? 'active' : ''}>Manage Events</button>
        <button onClick={() => setTab(3)} className={tab===3 ? 'active' : ''}>Manage Users</button>
        <button onClick={() => setTab(4)} className={tab===4 ? 'active' : ''}>Bookings</button>
        <button onClick={() => setTab(5)} className={tab===5 ? 'active' : ''}>Coming Soon</button>
      </div>
      <div className="tab-content">
        {tab === 1 && <BookingTab events={events} onBookingSubmit={onBookingSubmit} />}
        {tab === 2 && <EventTab />}
        {tab === 3 && <UserDetailsTab />}
        {tab === 4 && <BookingsTab />}
        {tab === 5 && <ComingSoonTab />}
      </div>
    </div>
  );
}

// BookingsTab: View, delete, cancel bookings, show users popup
function BookingsTab() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showUsers, setShowUsers] = useState(null); // booking object or null

  // Fetch bookings
  useEffect(() => {
    setLoading(true);
    fetch(`${API_BASE}/bookingdetails`)
      .then(res => res.json())
      .then(data => { setBookings(data); setLoading(false); })
      .catch(() => { setError('Failed to load bookings'); setLoading(false); });
  }, []);

  // Delete booking
  const handleDelete = async (id) => {
    if (!window.confirm('Delete this booking?')) return;
    try {
      const res = await fetch(`${API_BASE}/bookingdetails/${id}`, { method: 'DELETE' });
      if (res.ok) setBookings(bookings.filter(b => b._id !== id));
      else alert('Failed to delete');
    } catch { alert('Error deleting'); }
  };
  // Cancel booking
  const handleCancel = async (id) => {
    if (!window.confirm('Cancel this booking?')) return;
    try {
      const res = await fetch(`${API_BASE}/bookingdetails/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'cancelled' })
      });
      if (res.ok) setBookings(bookings.map(b => b._id === id ? { ...b, status: 'cancelled' } : b));
      else alert('Failed to cancel');
    } catch { alert('Error cancelling'); }
  };

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: 24 }}>
      <h2 style={{ marginBottom: 18 }}>All Bookings</h2>
      {loading ? <div>Loading...</div> : error ? <div style={{ color: 'red' }}>{error}</div> : (
        <div style={{ overflowX: 'auto', borderRadius: 12, boxShadow: '0 2px 12px #f0f0f7', background: '#fafaff' }}>
          <table style={{ minWidth: 900, width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: 8, overflow: 'hidden', fontSize: 15 }}>
            <thead>
              <tr style={{ background: '#f0f0f7', position: 'sticky', top: 0, zIndex: 2 }}>
                <th style={{ padding: 8, position: 'sticky', left: 0, background: '#f0f0f7', zIndex: 3 }}>Booking ID</th>
                <th style={{ padding: 8 }}>Admin</th>
                <th style={{ padding: 8 }}>Event</th>
                <th style={{ padding: 8 }}>Date</th>
                <th style={{ padding: 8 }}>Location</th>
                <th style={{ padding: 8 }}>Users</th>
                <th style={{ padding: 8 }}>Status</th>
                <th style={{ padding: 8 }}>Created</th>
                <th style={{ padding: 8 }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map(b => (
                <tr key={b._id} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: 8, position: 'sticky', left: 0, background: '#fff', zIndex: 2 }}>{b._id}</td>
                  <td style={{ padding: 8 }}>{b.adminName}</td>
                  <td style={{ padding: 8 }}>{b.eventName}</td>
                  <td style={{ padding: 8 }}>{b.eventDate}</td>
                  <td style={{ padding: 8 }}>{b.eventLocation}</td>
                  <td style={{ padding: 8 }}>
                    <button onClick={() => setShowUsers(b)} style={{ padding: '4px 12px', borderRadius: 5, border: 'none', background: '#6c63ff', color: '#fff', fontWeight: 500, cursor: 'pointer' }}>
                      {b.users?.length || 0} user{b.users?.length === 1 ? '' : 's'}
                    </button>
                  </td>
                  <td style={{ padding: 8 }}>{b.status}</td>
                  <td style={{ padding: 8 }}>{b.createdAt ? new Date(b.createdAt).toLocaleString() : ''}</td>
                  <td style={{ padding: 8 }}>
                    <button onClick={() => handleDelete(b._id)} style={{ marginRight: 8, padding: '6px 12px', borderRadius: 5, border: 'none', background: '#f44336', color: '#fff', fontWeight: 500, cursor: 'pointer' }}>Delete</button>
                    {b.status !== 'cancelled' && <button onClick={() => handleCancel(b._id)} style={{ padding: '6px 12px', borderRadius: 5, border: 'none', background: '#ff9800', color: '#fff', fontWeight: 500, cursor: 'pointer' }}>Cancel</button>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {/* Users popup */}
      {showUsers && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
          background: 'rgba(0,0,0,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 3000
        }}>
          <div style={{
            background: '#fff', borderRadius: 16, padding: '32px 28px 24px 28px', minWidth: 340, boxShadow: '0 4px 32px #bbb', maxWidth: 520,
            display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', width: '100%'
          }}>
            <button onClick={() => setShowUsers(null)}
              style={{ position: 'absolute', top: 18, right: 18, background: '#f0f0f7', border: 'none', borderRadius: '50%', width: 32, height: 32, fontSize: 22, cursor: 'pointer', color: '#888', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s' }}
              title="Close"
            >×</button>
            <div style={{ marginBottom: 18, width: '100%', textAlign: 'center' }}>
              <div style={{ fontWeight: 700, fontSize: 20, color: '#333', marginBottom: 2 }}>Booking Users</div>
              <div style={{ fontSize: 15, color: '#666' }}>{showUsers.eventName} ({showUsers.eventDate}) - {showUsers.eventLocation}</div>
            </div>
            <div style={{ width: '100%', overflowX: 'auto', borderRadius: 8, boxShadow: '0 1px 6px #f0f0f7', background: '#fafaff' }}>
              <table style={{ minWidth: 420, width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: 8, fontSize: 15 }}>
                <thead>
                  <tr style={{ background: '#f0f0f7' }}>
                    <th style={{ padding: 8 }}>Name</th>
                    <th style={{ padding: 8 }}>Mobile</th>
                    <th style={{ padding: 8 }}>Email</th>
                    <th style={{ padding: 8 }}>Age</th>
                    <th style={{ padding: 8 }}>Location</th>
                  </tr>
                </thead>
                <tbody>
                  {showUsers.users?.map((u, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid #eee' }}>
                      <td style={{ padding: 8 }}>{u.name}</td>
                      <td style={{ padding: 8 }}>{u.mobile}</td>
                      <td style={{ padding: 8 }}>{u.email}</td>
                      <td style={{ padding: 8 }}>{u.age}</td>
                      <td style={{ padding: 8 }}>{u.location}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
// UserDetailsTab: Manage users CRUD and password validation
function UserDetailsTab() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ username: '', email: '', mobile: '', password: '' });
  const [error, setError] = useState('');
  const [editing, setEditing] = useState(null);
  const [newPassword, setNewPassword] = useState('');

  // Fetch users
  useEffect(() => {
    fetch(`${API_BASE}/userdetails`)
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(() => setUsers([]));
  }, []);

  // Password validation
  function validatePassword(pw) {
    return (
      typeof pw === 'string' &&
      pw.length >= 6 && pw.length <= 30 &&
      /[A-Z]/.test(pw) &&
      /[a-z]/.test(pw) &&
      /[0-9]/.test(pw) &&
      /[^A-Za-z0-9]/.test(pw)
    );
  }

  // At least one of username/email/mobile required
  function hasIdentifier(f) {
    return f.username.trim() || f.email.trim() || f.mobile.trim();
  }

  // Create or update user
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!hasIdentifier(form)) return setError('Username, email, or mobile required');
    if (!editing && !validatePassword(form.password)) return setError('Password must be 6-30 chars, include upper, lower, number, special');
    if (editing && newPassword && !validatePassword(newPassword)) return setError('New password must be 6-30 chars, include upper, lower, number, special');

    let payload = { ...form };
    if (editing) {
      // Only send password if changing
      if (newPassword) {
        payload = { ...payload, password: newPassword };
      } else {
        delete payload.password;
      }
    }

    try {
      const url = `${API_BASE}/userdetails${editing ? '/' + editing : ''}`;
      const method = editing ? 'PUT' : 'POST';
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        setForm({ username: '', email: '', mobile: '', password: '' });
        setNewPassword('');
        setEditing(null);
        // Refresh users
        const usersRes = await fetch(`${API_BASE}/userdetails`);
        setUsers(await usersRes.json());
      } else {
        const data = await res.json();
        setError(data.message || 'Failed to save user');
      }
    } catch {
      setError('Error connecting to server');
    }
  };

  // Edit user
  const editUser = (u) => {
    setForm({ username: u.username || '', email: u.email || '', mobile: u.mobile || '', password: '' });
    setEditing(u._id);
    setNewPassword('');
  };

  // Delete user
  const deleteUser = async (id) => {
    if (!window.confirm('Delete this user?')) return;
    try {
      const res = await fetch(`${API_BASE}/userdetails/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setUsers(users.filter(u => u._id !== id));
      }
    } catch {}
  };

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: 24 }}>
      <h2 style={{ marginBottom: 18 }}>Manage Users</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: 24, background: '#fafaff', padding: 20, borderRadius: 10, boxShadow: '0 2px 8px #eee' }}>
        {error && <div style={{ color: 'red', marginBottom: 10 }}>{error}</div>}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <label style={{ width: 90, fontWeight: 500 }}>Username</label>
            <input style={{ flex: 1, padding: 7, borderRadius: 5, border: '1px solid #ccc' }} placeholder="Username" value={form.username} onChange={e => setForm(f => ({ ...f, username: e.target.value }))} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <label style={{ width: 90, fontWeight: 500 }}>Email</label>
            <input style={{ flex: 1, padding: 7, borderRadius: 5, border: '1px solid #ccc' }} placeholder="Email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <label style={{ width: 90, fontWeight: 500 }}>Mobile</label>
            <input style={{ flex: 1, padding: 7, borderRadius: 5, border: '1px solid #ccc' }} placeholder="Mobile" value={form.mobile} onChange={e => setForm(f => ({ ...f, mobile: e.target.value }))} />
          </div>
          {!editing && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <label style={{ width: 90, fontWeight: 500 }}>Password<span style={{color:'#f00'}}>*</span></label>
              <input type="password" style={{ flex: 1, padding: 7, borderRadius: 5, border: '1px solid #ccc' }} placeholder="Password*" value={form.password} onChange={e => setForm(f => ({ ...f, password: e.target.value }))} />
            </div>
          )}
          {editing && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <label style={{ width: 90, fontWeight: 500 }}>New PW</label>
              <input type="password" style={{ flex: 1, padding: 7, borderRadius: 5, border: '1px solid #ccc' }} placeholder="New Password (optional)" value={newPassword} onChange={e => setNewPassword(e.target.value)} />
            </div>
          )}
        </div>
        <div style={{ marginTop: 18, display: 'flex', gap: 10 }}>
          <button type="submit" style={{ padding: '8px 22px', borderRadius: 6, border: 'none', background: '#6c63ff', color: '#fff', fontWeight: 500, cursor: 'pointer' }}>{editing ? 'Update User' : 'Create User'}</button>
          {editing && <button type="button" onClick={() => { setEditing(null); setForm({ username: '', email: '', mobile: '', password: '' }); setNewPassword(''); }} style={{ padding: '8px 22px', borderRadius: 6, border: 'none', background: '#eee', color: '#333', fontWeight: 500, cursor: 'pointer' }}>Cancel</button>}
        </div>
      </form>
      <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: 8, overflow: 'hidden', fontSize: 15 }}>
        <thead>
          <tr style={{ background: '#f0f0f7' }}>
            <th style={{ padding: 8 }}>Username</th>
            <th style={{ padding: 8 }}>Email</th>
            <th style={{ padding: 8 }}>Mobile</th>
            <th style={{ padding: 8 }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u._id} style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: 8 }}>{u.username}</td>
              <td style={{ padding: 8 }}>{u.email}</td>
              <td style={{ padding: 8 }}>{u.mobile}</td>
              <td style={{ padding: 8 }}>
                <button onClick={() => editUser(u)} style={{ marginRight: 8, padding: '6px 16px', borderRadius: 5, border: 'none', background: '#6c63ff', color: '#fff', fontWeight: 500, cursor: 'pointer' }}>Edit</button>
                <button onClick={() => deleteUser(u._id)} style={{ padding: '6px 16px', borderRadius: 5, border: 'none', background: '#f44336', color: '#fff', fontWeight: 500, cursor: 'pointer' }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// import { useState } from 'react';
// import { API_BASE } from '../utils/apiBase';

function BookingTab({ events }) {
  const [adminName, setAdminName] = useState('');
  const [eventId, setEventId] = useState(events[0]?._id || events[0]?.id);
  const [users, setUsers] = useState([{ name: '', mobile: '', email: '', age: '', location: '' }]);
  const [error, setError] = useState('');
  const [bookingResult, setBookingResult] = useState(null);

  // Sync eventId with events prop when events change
  useEffect(() => {
    if (events && events.length > 0) {
      setEventId(events[0]._id || events[0].id);
    }
  }, [events]);

  const handleUserChange = (idx, field, value) => {
    setUsers(users.map((u, i) => i === idx ? { ...u, [field]: value } : u));
  };
  const addUser = () => {
    if (users.length < 20) setUsers([...users, { name: '', mobile: '', email: '', age: '', location: '' }]);
  };
  const removeUser = (idx) => {
    if (users.length > 1) setUsers(users.filter((_, i) => i !== idx));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!adminName.trim()) return setError('Admin name required');
    if (!users[0].name.trim() || !users[0].mobile.trim()) return setError('At least 1 user with name and mobile required');
    // Find event details for display
    const event = events.find(ev => (ev._id || ev.id) === eventId);
    if (!event) return setError('Selected event not found');
    const booking = {
      adminName,
      eventId,
      eventName: event.name,
      eventDate: event.date,
      eventLocation: event.location,
      users
    };
    try {
      const res = await fetch(`${API_BASE}/bookingdetails`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(booking)
      });
      if (res.ok) {
        const data = await res.json();
        setBookingResult({
          id: data._id,
          eventName: event.name,
          eventDate: event.date,
          eventLocation: event.location
        });
      } else {
        setError('Failed to create booking');
      }
    } catch {
      setError('Error connecting to server');
    }
  };

  // Share/copy helpers
  const bookingUrl = bookingResult ? `${window.location.origin}/booking/${bookingResult.id}` : '';
  const shareText = bookingResult
    ? `Booking Confirmed!\nEvent: ${bookingResult.eventName}\nDate: ${bookingResult.eventDate}\nLocation: ${bookingResult.eventLocation}\nBooking ID: ${bookingResult.id}\nView: ${bookingUrl}`
    : '';

  const handleCopy = () => {
    navigator.clipboard.writeText(shareText);
    alert('Copied!');
  };

  const handleShare = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`, '_blank');
  };

  // Snackbar/notification for booking result
  const [showSnackbar, setShowSnackbar] = useState(false);
  useEffect(() => {
    if (bookingResult) setShowSnackbar(true);
  }, [bookingResult]);

  // Snackbar UI (fixed at bottom center)
  const snackbar = bookingResult && showSnackbar && (
    <div style={{
      position: 'fixed',
      left: '50%',
      bottom: 32,
      transform: 'translateX(-50%)',
      background: '#fff',
      boxShadow: '0 2px 16px rgba(0,0,0,0.15)',
      borderRadius: 12,
      padding: '24px 32px 20px 32px',
      minWidth: 320,
      zIndex: 1000,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 12
    }}>
      <div style={{width: '100%', display: 'flex', justifyContent: 'flex-end', marginBottom: -8, marginTop: -8}}>
        <button onClick={() => setShowSnackbar(false)} style={{background: 'none', border: 'none', fontSize: 20, cursor: 'pointer', color: '#888'}}>×</button>
      </div>
      <div style={{textAlign: 'center'}}>
        <div style={{fontWeight: 600, fontSize: 18, marginBottom: 4}}>Booking Successful!</div>
        <div style={{fontSize: 15}}>Booking ID: <b>{bookingResult.id}</b></div>
      </div>
      <div style={{display: 'flex', gap: 12, marginTop: 8}}>
        <button onClick={handleShare} style={{padding: '8px 18px', borderRadius: 6, border: 'none', background: '#6c63ff', color: '#fff', fontWeight: 500, cursor: 'pointer'}}>Share</button>
        <button onClick={handleCopy} style={{padding: '8px 18px', borderRadius: 6, border: 'none', background: '#6c63ff', color: '#fff', fontWeight: 500, cursor: 'pointer'}}>Copy</button>
        <a href={bookingUrl} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
          <button style={{padding: '8px 18px', borderRadius: 6, border: 'none', background: '#6c63ff', color: '#fff', fontWeight: 500, cursor: 'pointer'}}>View Booking</button>
        </a>
      </div>
    </div>
  );

  return (
    <>
      <form className="booking-form" onSubmit={handleSubmit}>
        <h2>Book Users for Event</h2>
        {error && <div className="error">{error}</div>}
        <label>Admin Name* <input value={adminName} onChange={e => setAdminName(e.target.value)} required /></label>
        <label>Event*
          <select value={eventId} onChange={e => setEventId(e.target.value)}>
            {events.map(ev => (
              <option key={ev._id || ev.id} value={ev._id || ev.id}>
                {ev.name} ({ev.date}) - {ev.location}
              </option>
            ))}
          </select>
        </label>
        <h3>Users</h3>
        <div className="user-table" style={{ overflowX: 'auto', minWidth: 600, paddingBottom: 8 }}>
          <div className="user-table-header" style={{ display: 'flex', minWidth: 700 }}>
            <div style={{ flex: 2, minWidth: 120 }}>Name{users.length > 0 && <span style={{color:'#f00'}}>*</span>}</div>
            <div style={{ flex: 2, minWidth: 140 }}>Mobile{users.length > 0 && <span style={{color:'#f00'}}>*</span>}</div>
            <div style={{ flex: 3, minWidth: 180 }}>Email</div>
            <div style={{ flex: 1, minWidth: 80 }}>Age</div>
            <div style={{ flex: 2, minWidth: 120 }}>Location</div>
            <div style={{ flex: 1, minWidth: 80 }}>Actions</div>
          </div>
          {users.map((user, idx) => (
            <div key={idx} className="user-table-row" style={{ display: 'flex', minWidth: 700, alignItems: 'center', gap: 8, marginBottom: 4 }}>
              <div style={{ flex: 2, minWidth: 120 }}>
                <label htmlFor={`user-name-${idx}`}>Name{idx === 0 && <span style={{color:'#f00'}}>*</span>}</label>
                <input id={`user-name-${idx}`} style={{ width: '100%' }} maxLength={30} placeholder={idx === 0 ? "Name*" : "Name"} value={user.name} onChange={e => handleUserChange(idx, 'name', e.target.value)} required={idx===0} />
              </div>
              <div style={{ flex: 2, minWidth: 140 }}>
                <label htmlFor={`user-mobile-${idx}`}>Mobile{idx === 0 && <span style={{color:'#f00'}}>*</span>}</label>
                <input
                  id={`user-mobile-${idx}`}
                  style={{ width: '100%', fontFamily: 'monospace' }}
                  maxLength={15}
                  placeholder={idx === 0 ? "Mobile*" : "Mobile"}
                  value={user.mobile}
                  onChange={e => handleUserChange(idx, 'mobile', e.target.value)}
                  required={idx===0}
                  type="text"
                  inputMode="tel"
                />
                {/* Masked mobile for display only, not in input */}
                {user.mobile && user.mobile.length > 2 && (
                  <div style={{ fontSize: 13, color: '#888', marginTop: 2 }}>
                    Masked: {'*'.repeat(user.mobile.length - 2) + user.mobile.slice(-2)}
                  </div>
                )}
              </div>
              <div style={{ flex: 3, minWidth: 180 }}>
                <label htmlFor={`user-email-${idx}`}>Email</label>
                <input id={`user-email-${idx}`} style={{ width: '100%' }} maxLength={40} placeholder="Email" value={user.email} onChange={e => handleUserChange(idx, 'email', e.target.value)} />
              </div>
              <div style={{ flex: 1, minWidth: 80 }}>
                <label htmlFor={`user-age-${idx}`}>Age</label>
                <input id={`user-age-${idx}`} style={{ width: '100%' }} maxLength={3} placeholder="Age" value={user.age} onChange={e => handleUserChange(idx, 'age', e.target.value)} />
              </div>
              <div style={{ flex: 2, minWidth: 120 }}>
                <label htmlFor={`user-location-${idx}`}>Location</label>
                <input id={`user-location-${idx}`} style={{ width: '100%' }} maxLength={30} placeholder="Location" value={user.location} onChange={e => handleUserChange(idx, 'location', e.target.value)} />
              </div>
              <div className="user-actions" style={{ flex: 1, minWidth: 80, display: 'flex', gap: 4 }}>
                {users.length > 1 && <button type="button" onClick={() => removeUser(idx)} title="Remove user">-</button>}
                {idx === users.length-1 && users.length < 20 && <button type="button" onClick={addUser} title="Add user">+</button>}
              </div>
            </div>
          ))}
        </div>
        <button type="submit">Submit Booking</button>
      </form>
      {snackbar}
    </>
  );
}

function EventTab() {
  const [events, setEvents] = useState([]);
  const [form, setForm] = useState({ name: '', date: '', location: '', refs: [{ type: '', url: '' }] });
  const [editing, setEditing] = useState(null);

  // Fetch events from backend on mount
  useEffect(() => {
    fetch(`${API_BASE}/eventdetails`)
      .then(res => res.json())
      .then(data => setEvents(data))
      .catch(() => setEvents([]));
  }, []);

  const handleRefChange = (idx, field, value) => {
    const refs = form.refs.map((r, i) => i === idx ? { ...r, [field]: value } : r);
    setForm({ ...form, refs });
  };
  const addRef = () => {
    if (form.refs.length < 5) setForm({ ...form, refs: [...form.refs, { type: '', url: '' }] });
  };
  const removeRef = (idx) => {
    if (form.refs.length > 1) setForm({ ...form, refs: form.refs.filter((_, i) => i !== idx) });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim()) return;
    if (editing !== null) {
      // PUT update to backend
      const eventToUpdate = events[editing];
      try {
        const res = await fetch(`${API_BASE}/eventdetails/${eventToUpdate._id || eventToUpdate.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form)
        });
        if (res.ok) {
          const updatedEvent = await res.json();
          setEvents(events.map((ev, i) => i === editing ? updatedEvent : ev));
          setEditing(null);
          setForm({ name: '', date: '', location: '', refs: [{ type: '', url: '' }] });
        } else {
          alert('Failed to update event');
        }
      } catch (err) {
        alert('Error connecting to server');
      }
      return;
    }
    // POST new event to backend
    try {
      const res = await fetch(`${API_BASE}/eventdetails`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (res.ok) {
        // Refresh event list after successful creation
        const newEvent = await res.json();
        setEvents(prev => [...prev, newEvent]);
        setForm({ name: '', date: '', location: '', refs: [{ type: '', url: '' }] });
      } else {
        // Optionally handle error
        alert('Failed to add event');
      }
    } catch (err) {
      alert('Error connecting to server');
    }
  };
  const editEvent = (idx) => {
    setForm(events[idx]);
    setEditing(idx);
  };
  return (
    <div className="event-tab">
      <h2>Manage Events</h2>
      <form className="event-form" onSubmit={handleSubmit}>
        <input placeholder="Event Name*" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
        <input placeholder="Date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} />
        <input placeholder="Location" value={form.location} onChange={e => setForm({ ...form, location: e.target.value })} />
        <div className="refs">
          <label>Reference Links (max 5)</label>
          {form.refs.map((ref, idx) => (
            <div key={idx} className="ref-fields">
              <select value={ref.type} onChange={e => handleRefChange(idx, 'type', e.target.value)}>
                <option value="">Type</option>
                <option value="pic">Pic</option>
                <option value="video">Video</option>
                <option value="pdf">PDF</option>
                <option value="link">Link</option>
              </select>
              <input placeholder="URL" value={ref.url} onChange={e => handleRefChange(idx, 'url', e.target.value)} />
              {form.refs.length > 1 && <button type="button" onClick={() => removeRef(idx)}>-</button>}
              {idx === form.refs.length-1 && form.refs.length < 5 && <button type="button" onClick={addRef}>+</button>}
            </div>
          ))}
        </div>
        <button type="submit">{editing !== null ? 'Update' : 'Add'} Event</button>
      </form>
      <h3>Current Events</h3>
      <ul>
        {events.map((ev, idx) => (
          <li key={ev._id || ev.id}>
            <b>{ev.name}</b> ({ev.date}) - {ev.location}
            <button onClick={() => editEvent(idx)}>Edit</button>
            {ev.refs && ev.refs.length > 0 && (
              <ul>
                {ev.refs.map((r, i) => <li key={i}>{r.type}: {r.url}</li>)}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ComingSoonTab() {
  return <div style={{ padding: 40, textAlign: 'center' }}><h2>Coming Soon</h2></div>;
}

export default AdminPanel;
