import './App.css'
import Home from './pages/home';
import ContactUs from './pages/ContactUs';
import Dyna from './pages/Dyna';
import NotFound from './pages/NotFound';
import TripDetailsPage from './pages/TripDetailsPage';
import { Routes, Route } from 'react-router-dom';



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/dyna" element={<Dyna />} />
      <Route path="/tripdetails/:id" element={<TripDetailsPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}


export default App;
