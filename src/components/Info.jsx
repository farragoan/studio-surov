import './Info.css'

export default function Info() {
    return (
        <section className="info-section" id="info">
            <div className="info-container">
                <header className="info-header">
                    <span className="info-label">ABOUT ME</span>
                    <h2 className="info-title">Surabhi Iyer</h2>
                </header>

                <div className="info-content">
                    <div className="bio-text">
                        <p className="large-p">
                            Co-founder of <a href="https://flowlyf.com" target="_blank" rel="noopener">Flowlyf</a>.
                            A product and lifestyle designer dedicated to bringing <span className="italic">Spaces in Harmony</span>.
                        </p>
                        <p>
                            With a background in interior design and a passion for utility, I create solutions
                            that blend simplicity with extreme functionality. Studio Surov is the manifestation
                            of this philosophy—where every detail serves a purpose and every space tells a story.
                        </p>
                    </div>

                    <div className="mission-statement">
                        <span className="mission-label">THE MISSION</span>
                        <p>Transforming living environments into curated experiences through thoughtful product design and interior storytelling.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
