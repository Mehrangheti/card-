import { useState } from 'react'
import Info from './components/info'
import About from './components/about'
import Inerest from './components/interst'
import Footer from './components/footer'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='cont'>
        <Info />
        <About />
        <Inerest />
        <Footer />
    </div>
      

  )
}

