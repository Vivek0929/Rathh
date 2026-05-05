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
        <button onClick={() => setTab(3)} className={tab===3 ? 'active' : ''}>Coming Soon</button>
      </div>
      <div className="tab-content">
        {tab === 1 && <BookingTab events={events} onBookingSubmit={onBookingSubmit} />}
        {tab === 2 && <EventTab />}
        {tab === 3 && <ComingSoonTab />}
      </div>
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
        <div className="user-table">
          <div className="user-table-header">
            <div>Name*</div>
            <div>Mobile*</div>
            <div>Email</div>
            <div>Age</div>
            <div>Location</div>
            <div>Actions</div>
          </div>
          {users.map((user, idx) => (
            <div key={idx} className="user-table-row">
              <div>
                <label htmlFor={`user-name-${idx}`}>Name*</label>
                <input id={`user-name-${idx}`} placeholder="Name*" value={user.name} onChange={e => handleUserChange(idx, 'name', e.target.value)} required={idx===0} />
              </div>
              <div>
                <label htmlFor={`user-mobile-${idx}`}>Mobile*</label>
                <input id={`user-mobile-${idx}`} placeholder="Mobile*" value={user.mobile} onChange={e => handleUserChange(idx, 'mobile', e.target.value)} required={idx===0} />
              </div>
              <div>
                <label htmlFor={`user-email-${idx}`}>Email</label>
                <input id={`user-email-${idx}`} placeholder="Email" value={user.email} onChange={e => handleUserChange(idx, 'email', e.target.value)} />
              </div>
              <div>
                <label htmlFor={`user-age-${idx}`}>Age</label>
                <input id={`user-age-${idx}`} placeholder="Age" value={user.age} onChange={e => handleUserChange(idx, 'age', e.target.value)} />
              </div>
              <div>
                <label htmlFor={`user-location-${idx}`}>Location</label>
                <input id={`user-location-${idx}`} placeholder="Location" value={user.location} onChange={e => handleUserChange(idx, 'location', e.target.value)} />
              </div>
              <div className="user-actions">
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

// import { useEffect } from 'react';
// import { API_BASE } from '../utils/apiBase';

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
