import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import TravelStyles from './components/TravelStyles'
import WhyChooseUs from './components/WhyChooseUs'
import HeroSection from './components/HeroSection'

function App() {
  return (
    <>
      <Navbar />
      <div style={{ padding: '0', flex: 1, width: '100%' }}>
        <HeroSection />
        <TravelStyles />
        <WhyChooseUs />
      </div>
      <Footer />
    </>
  )
}


export default App
