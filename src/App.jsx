import './App.css'
import CodePreview from './Components/CodePreview'
import CustomCusor from './Components/CustomCusor'
import Features from './Components/Features'
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
    </div>
  )
}

export default App
