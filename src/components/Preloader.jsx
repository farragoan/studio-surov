import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Preloader({ onComplete }) {
    const overlayRef = useRef()
    const logoRef = useRef()

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                onComplete: onComplete
            })

            // Initial state: Logo centered
            gsap.set(logoRef.current, {
                xPercent: -50,
                yPercent: -50,
                left: '50%',
                top: '50%',
                scale: 0
            })

            tl.to(logoRef.current, {
                scale: 1,
                duration: 1,
                ease: 'power4.out'
            })
                .to(logoRef.current, {
                    left: '4vw',
                    top: '4vh',
                    xPercent: 0,
                    yPercent: 0,
                    duration: 1.2,
                    ease: 'power4.inOut',
                    delay: 0.5
                })
                .to(overlayRef.current, {
                    opacity: 0,
                    duration: 1,
                    ease: 'power3.inOut'
                }, '-=0.5')
                .set(overlayRef.current, { display: 'none' })
        })

        return () => ctx.revert()
    }, [onComplete])

    return (
        <div className="preloader-overlay" ref={overlayRef}>
            <div className="preloader-logo" ref={logoRef}>
                <div className="circle-logo"></div>
            </div>
            <style dangerouslySetInnerHTML={{
                __html: `
        .preloader-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: #000;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .preloader-logo {
          position: absolute;
        }
        .circle-logo {
          width: 40px;
          height: 40px;
          border: 1px solid #fff;
          border-radius: 50%;
          position: relative;
        }
        .circle-logo::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 4px;
          height: 4px;
          background: #fff;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
      `}} />
        </div>
    )
}
