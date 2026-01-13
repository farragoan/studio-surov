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
    <article className="home" ref={component}>
      <div className="img-container img-main">
        <img
          src="https://zhenyary.com/images/home/zhenya-bg.jpg"
          alt="Surabhi Iyer"
        />
      </div>

      <h1>
        <span className="label">Studio Surov</span>
        <div className="name-display">
          <span>SURABHI</span>
          <br />
          <span className="italic">IYER</span>
        </div>
      </h1>

      <div className="img-container img-front">
        <img
          src="https://zhenyary.com/images/home/zhenya-front.png"
          alt="Surabhi Iyer"
        />
      </div>

      <button className="play-button">
        <svg viewBox="0 0 100 100" className="circle-text">
          <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
          <text>
            <textPath xlinkHref="#circlePath">
              SPACES IN HARMONY • SPACES IN HARMONY •
            </textPath>
          </text>
        </svg>
        <div className="play-icon"></div>
      </button>

      <div className="click-interaction">
        <ul className="services-list">
          <li>Product Design</li>
          <li>Interior Spaces</li>
          <li>Lifestyle solutions</li>
        </ul>
      </div>

      <footer className="home-footer">
        <div className="socials">
          <a href="https://www.linkedin.com/in/surabhi-iyer-791b3389/" target="_blank" rel="noopener">LinkedIn</a>
          <a href="https://flowlyf.com" target="_blank" rel="noopener">Flowlyf</a>
        </div>
      </footer>
    </article>
  )
}
