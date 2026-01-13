import { useState } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [activeLink, setActiveLink] = useState(null)

  return (
    <nav className="navbar">
      <div className="container">
        <a href="/about" className="nav-link">
          <span className="title">Info</span>
          <span className="label">about me</span>
        </a>
        <a href="/work" className="nav-link">
          <span className="title">Work</span>
          <span className="label">some cases</span>
        </a>
        <a href="/workflow" className="nav-link">
          <span className="title">Workflow</span>
          <span className="label">All the processes</span>
        </a>
        <a href="/contact" className="nav-link">
          <span className="title">Contact me</span>
          <span className="label">For any collaborations</span>
        </a>
      </div>
    </nav>
  )
}
