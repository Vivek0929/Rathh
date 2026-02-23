import './App.css'
import Home from './pages/home';
import ContactUs from './pages/ContactUs';
import Dyna from './pages/Dyna';
 
import { Routes, Route } from 'react-router-dom';
 


function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/dyna" element={<Dyna />} />
      </Routes>
   
  )
}


export default App
