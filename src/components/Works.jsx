import './Works.css'

export default function Works() {
  const projects = [
    {
      id: 'cure',
      name: 'Cure',
      fullName: 'Cure Boutique',
      type: 'Boutique promo website',
      img: 'https://zhenyary.com/images/cure/cure-home-1.jpg',
      letter: 'C',
      roles: ['Art Direction', 'Branding', 'Interface Design'],
      desc: 'Unique nail and wax boutique that curated a build-your-own style menu.'
    },
    {
      id: 'rafal',
      name: 'Rafal Bojar',
      fullName: 'Rafal Bojar Portfolio',
      type: 'Portfolio website',
      img: 'https://zhenyary.com/images/rafal-bojar/rafal-bojar-home-1.jpg',
      letter: 'R',
      roles: ['Art direction', 'Interface design', 'Interaction design'],
      desc: 'Folio of a polish photographer and videographer, who loves to create visual stories.'
    }
  ]

  return (
    <article className="works-section">
      <header className="works-header">
        <span className="section-label">SELECTED WORKS</span>
      </header>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article key={project.id} className={`project-item ${index % 2 === 0 ? 'even' : 'odd'}`}>
            <div className="project-media">
              <div className="image-wrapper">
                <img src={project.img} alt={project.name} />
              </div>
              <div className="project-title-overlay">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-type">{project.type}</p>
              </div>
            </div>

            <div className="project-info">
              <div className="project-details">
                <h2 className="project-full-name">{project.fullName}</h2>
                <ul className="project-roles">
                  {project.roles.map((role, i) => (
                    <li key={i}>{role}{i < project.roles.length - 1 ? ' / ' : ''}</li>
                  ))}
                </ul>
                <p className="project-desc">{project.desc}</p>
                <a href={`/work/${project.id}`} className="case-link">Check full case +</a>
              </div>
            </div>

            <div className="project-letter">
              <span>{project.letter}</span>
            </div>
          </article>
        ))}
      </div>

      <div className="all-cases-footer">
        <a href="/work" className="huge-link">
          <span>All cases</span>
          <span className="outline">here</span>
        </a>
      </div>

      <footer className="thanks-footer">
        <p>
          Special thanks to <a href="https://www.romainavalle.dev" target="_blank" rel="noopener">Romain Avalle</a> for development.
        </p>
      </footer>
    </article>
  )
}
