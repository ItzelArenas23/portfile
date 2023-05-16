import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import { Work } from './components/Work'

function App() {
  
  return (
  
      <div className='App font-["Sen"]'>
       <Navbar />
       <Header />
       <About />
       {/* <Work /> */}
       <Skills />
       <Portfolio />
       <Contact />
      </div>
      
  )
}

export default App
