import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import Feature from './components/Features'
import WhyChooseUs from './components/WhyChooseUs'
import Specialists from './components/Specialists'
import BookAppointment from './components/BookAppointment'
import MapSection from './components/MapSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <Feature />
      <WhyChooseUs />
      <Specialists />
      <BookAppointment />
      <MapSection />
      <Footer />
    </div>
  )
}

export default App
