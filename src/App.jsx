import './App.css'
import CodePreview from './Components/CodePreview'
import CTA from './Components/CTA'
import CustomCusor from './Components/CustomCusor'
import Features from './Components/Features'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import NavBar from './Components/NavBar'

import Ticker from './Components/Ticker'

function App() {


  return (
    <div>
      <CustomCusor />
      <NavBar />
      <Hero />
      <Ticker />
      <Features />
      <CodePreview />
      
      <CTA />
      <Footer />
    </div>
  )
}

export default App
