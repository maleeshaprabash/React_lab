import './App.css'
import CodePreview from './Components/CodePreview'
import CTA from './Components/CTA'
import CustomCusor from './Components/CustomCusor'
import Features from './Components/Features'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import NavBar from './Components/NavBar'
import Price from './Components/Price'
import Ticker from './Components/Ticker'
import FAQ from './Components/FAQ'

function App() {


  return (
    <div>
      <CustomCusor />
      <NavBar />
      <Hero />
      <Ticker />
      <Features />
      <CodePreview />
      <Price />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
