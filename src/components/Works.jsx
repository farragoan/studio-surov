import './Works.css'

export default function Works() {
  const projects = [
    {
      id: 'cure',
      name: 'Cure',
      type: 'DIGITAL PRODUCTION, E-COMMERCE',
      role: 'ART DIRECTION, DESIGN',
      image: 'https://zhenyary.com/images/cure/cure-home-1.jpg',
      letter: 'C'
    },
    {
      id: 'dna',
      name: 'DNA',
      type: 'WEBSITE, INTERACTION',
      role: 'DESIGN, ANIMATION',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop',
      letter: 'D'
    },
    {
      id: 'moxie',
      name: 'Moxie',
      type: 'BRANDING, WEBSITE',
      role: 'ART DIRECTION, DESIGN',
      image: 'https://images.unsplash.com/photo-1616489953149-8d9e29416bbd?q=80&w=2000&auto=format&fit=crop',
      letter: 'M'
    },
    {
      id: 'rafal',
      name: 'Rafal Bojar',
      type: 'EDITORIAL, DIGITAL',
      role: 'DESIGN, ART DIRECTION',
      image: 'https://images.unsplash.com/photo-1615873966503-4770bb1236c5?q=80&w=2000&auto=format&fit=crop',
      letter: 'R'
    }
  ]

  return (
    <article className="works-section" id="work">
      <header className="works-header">
        <span className="section-label">SELECTED WORKS</span>
      </header>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article key={project.id} className={`project-item ${index % 2 === 0 ? 'even' : 'odd'}`}>
            <div className="project-media">
              <span className="project-letter-bg">{project.letter}</span>
              <img src={project.image} alt={project.name} />
            </div>

            <div className="project-info">
              <span className="project-type">{project.type}</span>
              <h3 className="project-name">{project.name}</h3>
              <span className="project-role">{project.role}</span>
              <div className="project-link">
                <a href={`/work/${project.id}`}>EXPLORE CASE</a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <footer className="works-footer">
        <a href="/work" className="all-cases">
          <span>All cases </span>
          <span className="italic">here</span>
        </a>
        <p className="thanks">
          SPECIAL THANKS TO ALL TEAMS AND TALENTED INDIVIDUALS I'VE WORKED WITH.
        </p>
      </footer>
    </article>
  )
}
