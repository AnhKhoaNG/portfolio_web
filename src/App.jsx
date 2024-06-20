import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Work from './components/Work'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Home />

      <Skills />
      <Work />
      <Contact />
      
    </>
  )
}

export default App
