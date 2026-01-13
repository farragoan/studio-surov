import './Services.css'

export default function Services() {
  return (
    <article className="services-section">
      <header className="services-header">
        <span className="section-label">MY MAIN SERVICES</span>
      </header>

      <div className="services-content">
        <div className="line">
          <span className="serif">Art direction</span>
          <svg viewBox="0 0 48 48" className="star-inline">
            <path d="M20.078 14.026L24.157 0l5.02 14.026 12.548-7.013-6.588 13.247L48 24.312l-12.863 4.675 6.588 12.78-13.803-7.481L24.157 48l-4.079-13.714-13.176 7.48 5.96-12.779L0 24l12.863-3.74-5.02-13.247 12.235 7.013z" />
          </svg>
          <span className="bold-sans">Product design</span>
        </div>

        <div className="line">
          <span className="italic-serif underline">Visual design</span>
          <span className="serif">Mobile & web design</span>
        </div>

        <div className="line">
          <span className="bold-sans">Interaction design</span>
          <span className="amp">&</span>
          <span className="serif">Animation</span>
        </div>
      </div>
    </article>
  )
}
