import Image from "next/image";
import { site } from "../data/site";

export default function Hero() {
  return (
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-line" />{site.eyebrow}</p>
        <h1 id="hero-title">Dentistry with <em>precision.</em><br />Care with <em>purpose.</em></h1>
        <p className="hero-summary">{site.introduction}</p>
        <p className="education-line">{site.educationLine}</p>
        <div className="actions">
          <a href="#expertise" className="button button-dark">Explore my work <span aria-hidden="true">↗</span></a>
          {site.resumeUrl ? <a className="button button-outline" href={site.resumeUrl} target="_blank" rel="noopener noreferrer">View CV <span aria-hidden="true">↗</span></a> : <a className="button button-outline" href="#journey">My journey <span aria-hidden="true">↗</span></a>}
        </div>
      </div>
      <div className="hero-visual" aria-label="Abstract editorial portrait area">
        {site.portraitPath ? (
          <Image src={site.portraitPath} alt="Professional portrait of Dhrtika Bhatia" fill priority sizes="(max-width: 900px) 100vw, 45vw" className="portrait" />
        ) : (
          <div className="portrait-placeholder" aria-hidden="true">
            <span className="portrait-ring ring-one" /><span className="portrait-ring ring-two" />
            <span className="portrait-initial">D</span>
            <span className="portrait-caption">A thoughtful approach<br />to modern dentistry.</span>
          </div>
        )}
        <div className="hero-note"><span className="note-dot" /> {site.availability}</div>
      </div>
      <a href="#expertise" className="scroll-hint">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></a>
    </section>
  );
}
