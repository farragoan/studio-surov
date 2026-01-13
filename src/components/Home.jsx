import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import './Home.css'

export default function Home() {
  const component = useRef()

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 })

      tl.from('.img-main img', {
        y: 100,
        opacity: 0,
        scale: 1.1,
        duration: 2,
        ease: 'power4.out'
      })
        .from('.name-display span', {
          y: 150,
          skewY: 7,
          opacity: 0,
          duration: 1.5,
          stagger: 0.1,
          ease: 'power4.out'
        }, '-=1.5')
        .from('.img-front img', {
          y: 80,
          opacity: 0,
          duration: 1.8,
          ease: 'power3.out'
        }, '-=1.2')
        .from('.play-button, .click-interaction, .home-footer', {
          opacity: 0,
          y: 30,
          duration: 1.2,
          stagger: 0.1,
          ease: 'power3.out'
        }, '-=1')
    }, component)
    return () => ctx.revert()
  }, [])

  return (
    <article className="home" id="home" ref={component}>
      <div className="img-container img-main">
        <img
          src="https://zhenyary.com/images/home/zhenya-bg.jpg"
          alt="Studio Surov"
        />
      </div>

      <div className="hero-content">
        <span className="brand-label">STUDIO SUROV</span>
        <div className="split-title">
          <span className="title-left">STUDIO</span>
          <span className="title-right">SUROV</span>
        </div>
      </div>

      <div className="hero-skills">
        <div className="skill-trigger">
          <div className="star-icon">
            <svg viewBox="0 0 48 48">
              <path d="M20.078 14.026L24.157 0l5.02 14.026 12.548-7.013-6.588 13.247L48 24.312l-12.863 4.675 6.588 12.78-13.803-7.481L24.157 48l-4.079-13.714-13.176 7.48 5.96-12.779L0 24l12.863-3.74-5.02-13.247 12.235 7.013z" />
            </svg>
            <span className="click-label">CLICK CLICK</span>
          </div>
          <ul className="skills-list">
            <li>Product Design</li>
            <li>Interior Spaces</li>
            <li>Branding</li>
          </ul>
        </div>
      </div>

      <footer className="home-footer">
        <div className="footer-left">IN RED</div>
        <div className="footer-right">IN LIGHT</div>
      </footer>
    </article>
  )
}
