import { site } from "../data/site";
export default function About() {
  return (
    <section className="section about-section" id="about" aria-labelledby="about-title">
      <div className="container about-grid">
        <div className="about-art" aria-hidden="true"><div className="about-art-inner"><span className="about-orbit" /><span className="about-star">✳</span><span className="about-art-label">BEYOND<br />THE CHAIR</span></div></div>
        <div className="about-copy"><p className="kicker">04 / THE PERSON</p><h2 id="about-title">Curiosity goes<br /><em>where I go.</em></h2><p>{site.about}</p><div className="interests"><span>Photography</span><span>Exploration</span><span>Sailing</span><span>Creativity</span></div></div>
      </div>
    </section>
  );
}
