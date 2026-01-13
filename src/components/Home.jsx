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
          alt="Zhenya Rynzhuk"
        />
      </div>

      <h1>
        <span className="label">Zhenya Rynzhuk</span>
        <div className="name-display">
          <span>ZHENYA</span>
          <br />
          <span className="italic">RYNZHUK</span>
        </div>
      </h1>

      <div className="img-container img-front">
        <img
          src="https://zhenyary.com/images/home/zhenya-front.png"
          alt="Zhenya Rynzhuk"
        />
      </div>

      <button className="play-button">
        <svg viewBox="0 0 100 100" className="circle-text">
          <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
          <text>
            <textPath xlinkHref="#circlePath">
              PLAY SHOWREEL • PLAY SHOWREEL •
            </textPath>
          </text>
        </svg>
        <div className="play-icon"></div>
      </button>

      <div className="click-interaction">
        <button className="star-trigger">
          <svg viewBox="0 0 48 48" className="star">
            <path d="M20.078 14.026L24.157 0l5.02 14.026 12.548-7.013-6.588 13.247L48 24.312l-12.863 4.675 6.588 12.78-13.803-7.481L24.157 48l-4.079-13.714-13.176 7.48 5.96-12.779L0 24l12.863-3.74-5.02-13.247 12.235 7.013z" />
          </svg>
          <span className="tooltip">Click click</span>
        </button>
        <ul className="services-list">
          <li>Art direction</li>
          <li>Digital production</li>
          <li>Branding</li>
        </ul>
      </div>

      <footer className="home-footer">
        <div className="socials">
          <a href="https://dribbble.com/zhenyary" target="_blank" rel="noopener">Dribbble</a>
          <a href="https://www.behance.net/Zhenyary" target="_blank" rel="noopener">Behance</a>
          <a href="https://twitter.com/zhenyary" target="_blank" rel="noopener">Twitter</a>
        </div>
      </footer>
    </article>
  )
}
