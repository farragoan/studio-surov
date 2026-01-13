import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="#info" className="nav-link">
          <span className="title">Info</span>
          <span className="label">ABOUT ME</span>
        </a>
        <a href="#work" className="nav-link">
          <span className="title">Work</span>
          <span className="label">SOME CASES</span>
        </a>
        <a href="#workflow" className="nav-link">
          <span className="title">Workflow</span>
          <span className="label">ALL THE PROCESSES</span>
        </a>
        <a href="#contact" className="nav-link">
          <span className="title">Contact me</span>
          <span className="label">FOR ANY COLLABORATIONS</span>
        </a>
      </div>
    </nav>
  )
}
