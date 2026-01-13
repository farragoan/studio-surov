import { useState, useLayoutEffect } from 'react'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Info from './components/Info'
import Services from './components/Services'
import Works from './components/Works'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function GridOverlay() {
  return (
    <div className="grid-overlay">
      <div className="grid-line"></div>
      <div className="grid-line"></div>
      <div className="grid-line"></div>
      <div className="grid-line"></div>
    </div>
  )
}

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <div className="app">
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <GridOverlay />
      <Navbar />
      <main className="main">
        <section className="page">
          <Home />
          <Info />
          <Services />
          <Works />
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
