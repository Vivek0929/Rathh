import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_BASE } from '../utils/apiBase';

function BookingDetails() {
  const { uuid } = useParams();
  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    fetch(`${API_BASE}/bookingdetails/${uuid}`)
      .then(res => {
        if (!res.ok) throw new Error('Not found');
        return res.json();
      })
      .then(data => {
        setBooking(data);
        setError('');
      })
      .catch(() => {
        setBooking(null);
        setError('Booking not found');
      })
      .finally(() => setLoading(false));
  }, [uuid]);

  if (loading) return <div style={{ padding: 40 }}>Loading...</div>;
  if (error) return <div style={{ padding: 40, color: 'red' }}>{error}</div>;
  if (!booking) return null;

  // Status badge color
  const statusColor = booking.status === 'booked' ? '#4caf50' : booking.status === 'cancelled' ? '#f44336' : '#888';

  return (
    <div style={{ padding: 40, minHeight: '100vh', background: '#f7f8fa' }}>
      <div style={{
        maxWidth: 520,
        margin: '0 auto',
        background: '#fff',
        borderRadius: 16,
        boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
        padding: '32px 32px 24px 32px',
        position: 'relative',
      }}>
        <h2 style={{ marginTop: 0, marginBottom: 18, fontWeight: 700, fontSize: 26, letterSpacing: 0.2 }}>Booking Details</h2>
        <div style={{ marginBottom: 18 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
            <span style={{ fontWeight: 600, color: '#555' }}>Booking ID:</span>
            <span style={{ fontFamily: 'monospace', fontSize: 15 }}>{booking._id}</span>
          </div>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 6 }}>
            <div><span style={{ fontWeight: 600, color: '#555' }}>Admin:</span> {booking.adminName}</div>
            <div><span style={{ fontWeight: 600, color: '#555' }}>Event:</span> {booking.eventName}</div>
          </div>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 6 }}>
            <div><span style={{ fontWeight: 600, color: '#555' }}>Date:</span> {booking.eventDate}</div>
            <div><span style={{ fontWeight: 600, color: '#555' }}>Location:</span> {booking.eventLocation}</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
            <span style={{ fontWeight: 600, color: '#555' }}>Status:</span>
            <span style={{
              background: statusColor,
              color: '#fff',
              borderRadius: 8,
              padding: '2px 12px',
              fontWeight: 600,
              fontSize: 14,
              letterSpacing: 0.5
            }}>{booking.status}</span>
            <span style={{ color: '#888', fontSize: 13, marginLeft: 8 }}>
              Created: {new Date(booking.createdAt).toLocaleString()}
            </span>
          </div>
        </div>
        <div style={{ marginTop: 18 }}>
          <h3 style={{ margin: '0 0 10px 0', fontWeight: 600, fontSize: 18 }}>Users</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fafaff', borderRadius: 8, overflow: 'hidden', fontSize: 15 }}>
              <thead>
                <tr style={{ background: '#f0f0f7' }}>
                  <th style={{ padding: 8, fontWeight: 700, color: '#444', textAlign: 'left' }}>Name</th>
                  <th style={{ padding: 8, fontWeight: 700, color: '#444', textAlign: 'left' }}>Mobile</th>
                  <th style={{ padding: 8, fontWeight: 700, color: '#444', textAlign: 'left' }}>Email</th>
                  <th style={{ padding: 8, fontWeight: 700, color: '#444', textAlign: 'left' }}>Age</th>
                  <th style={{ padding: 8, fontWeight: 700, color: '#444', textAlign: 'left' }}>Location</th>
                </tr>
              </thead>
              <tbody>
                {booking.users && booking.users.length > 0 ? booking.users.map((u, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: 8 }}>{u.name}</td>
                    <td style={{ padding: 8 }}>{u.mobile}</td>
                    <td style={{ padding: 8 }}>{u.email}</td>
                    <td style={{ padding: 8 }}>{u.age}</td>
                    <td style={{ padding: 8 }}>{u.location}</td>
                  </tr>
                )) : (
                  <tr><td colSpan={5} style={{ textAlign: 'center', padding: 12 }}>No users</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingDetails;
