import './App.css'
import Home from './pages/home';
import ContactUs from './pages/ContactUs';
import Dyna from './pages/Dyna';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';


function App() {
  return (
  <BrowserRouter> 
   <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/dyna" element={<Dyna />} />
      </Routes>
    </Router>
    </BrowserRouter>
  )
}


export default App
