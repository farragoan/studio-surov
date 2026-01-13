import './Contact.css'

export default function Contact() {
  return (
    <article className="contact-section">
      <div className="contact-container">
        <h2 className="contact-heading">
          <span className="serif">Let's make </span>
          <span className="italic-serif thinner">something </span>
          <span className="serif">great!</span>
          <br />
          <a href="mailto:hey@studiosurov.com" className="email-link">
            hey@studiosurov.com
          </a>
          <span className="arrow"> → </span>
          <span className="italic-serif thinner">for</span>
          <br />
          <span className="arrow">→ </span>
          <span className="arrow orange">→ </span>
          <span className="arrow">→ </span>
          <span className="serif">collaborations.</span>
          <svg viewBox="0 0 48 48" className="star-final">
            <path d="M20.078 14.026L24.157 0l5.02 14.026 12.548-7.013-6.588 13.247L48 24.312l-12.863 4.675 6.588 12.78-13.803-7.481L24.157 48l-4.079-13.714-13.176 7.48 5.96-12.779L0 24l12.863-3.74-5.02-13.247 12.235 7.013z" />
          </svg>
        </h2>
      </div>

      <div className="footer-bottom">
        <div className="social-links-footer">
          <a href="#">Dribbble</a>
          <a href="#">Behance</a>
          <a href="#">Twitter</a>
        </div>
      </div>
    </article>
  )
}
