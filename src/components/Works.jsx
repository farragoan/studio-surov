import './Works.css'

export default function Works() {
  const projects = [
    {
      id: 'cure',
      name: 'Cure',
      type: 'DIGITAL PRODUCTION, E-COMMERCE',
      role: 'ART DIRECTION, DESIGN',
      image: 'https://zhenyary.com/images/work/cure/cure-cover.jpg',
      letter: 'C'
    },
    {
      id: 'dna',
      name: 'DNA',
      type: 'WEBSITE, INTERACTION',
      role: 'DESIGN, ANIMATION',
      image: 'https://zhenyary.com/images/work/dna/dna-cover.jpg',
      letter: 'D'
    },
    {
      id: 'moxie',
      name: 'Moxie',
      type: 'BRANDING, WEBSITE',
      role: 'ART DIRECTION, DESIGN',
      image: 'https://zhenyary.com/images/work/moxie/moxie-cover.jpg',
      letter: 'M'
    },
    {
      id: 'the-year',
      name: 'The Year',
      type: 'EDITORIAL, DIGITAL',
      role: 'DESIGN, ART DIRECTION',
      image: 'https://zhenyary.com/images/work/the-year/the-year-cover.jpg',
      letter: 'T'
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
