import './App.css'


import Home from './pages/home';
import ContactUs from './pages/ContactUs';
import Dyna from './pages/Dyna';
import NotFound from './pages/NotFound';
import TripDetailsPage from './pages/TripDetailsPage';
import AdminPanel from './pages/AdminPanel';
import BookingDetails from './pages/BookingDetails';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import LoginModal from './components/LoginModal';




// Set to true to skip admin login for development
const SKIP_ADMIN_LOGIN = false;

function App() {
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(SKIP_ADMIN_LOGIN);
  const [adminUser, setAdminUser] = useState(null);

  // Guarded admin route
  const adminElement = isAdminAuthenticated
    ? <AdminPanel adminUser={adminUser} />
    : <LoginModal onSuccess={user => { setIsAdminAuthenticated(true); setAdminUser(user); }} />;

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/dyna" element={<Dyna />} />
      <Route path="/tripdetails/:id" element={<TripDetailsPage />} />
      <Route path="/admin" element={adminElement} />
      <Route path="/booking/:uuid" element={<BookingDetails />} />
      <Route path="/booking/id/:bookingid" element={<BookingDetails />} />
      <Route path="/booking/:id" element={<BookingDetails />} />
      <Route path="/booking" element={<BookingDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}


export default App;
