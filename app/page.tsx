const expertise = [
  ["Restorative Dentistry", "Comprehensive care, direct and indirect restorations, crowns, prosthodontics, and treatment planning."],
  ["Surgical & Implant Experience", "Clinical extractions, surgical assisting, implant restoration workflows, and oral surgery exposure."],
  ["Digital Innovation", "An interest in digital scanning, CAD/CAM, 3D printing, and emerging clinical technologies."]
];
const experience = [
  ["Temple University", "DMD Candidate · Expected May 2027", "Comprehensive patient care and advanced dental training."],
  ["University of Pennsylvania", "Periodontal Research", "Studied periodontal biology, inflammation, and systemic health."],
  ["UC San Diego", "Clinical Research", "Contributed to salivary biomarker and oncology research."],
  ["Bharati Vidyapeeth, India", "Bachelor of Dental Surgery", "International dental education and clinical foundation."]
];
const research = [
  ["Salivary Biomarkers", "Exploring noninvasive approaches to understanding and monitoring disease."],
  ["Periodontal Science", "Research at the intersection of inflammation, tissue biology, and systemic health."],
  ["Digital Dentistry", "Exploring clinical workflows that integrate technology and patient-centered care."]
];
export default function Home() {
  return <main id="top">
    <header className="header"><div className="wrap header-row">
      <a className="brand" href="#top">Dhrtika Bhatia<span>.</span></a>
      <nav aria-label="Main navigation"><a href="#expertise">Expertise</a><a href="#journey">Journey</a><a href="#research">Research</a><a href="#about">About</a></nav>
      <a className="contact-link" href="#contact">Get in touch ↗</a>
    </div></header>
    <section className="hero"><div className="wrap hero-grid"><div className="hero-text">
      <p className="eyebrow">CLINICIAN · RESEARCHER · INNOVATOR</p>
      <h1>Dentistry with <em>precision.</em><br/>Care with <em>purpose.</em></h1>
      <p className="intro">International clinical experience meets evidence-driven care and an enthusiasm for digital innovation.</p>
      <div className="buttons"><a className="button primary" href="#expertise">Explore my work ↗</a><a className="button secondary" href="#contact">Let&apos;s connect</a></div>
      <p className="scroll-label">SCROLL TO EXPLORE ↓</p>
    </div><div className="hero-visual" aria-label="Monogram design with D B initials"><div className="orb"><span>DB</span><small>PRECISION · PURPOSE · PROGRESS</small></div></div></div></section>
    <section className="manifesto"><div className="wrap manifesto-grid"><p className="eyebrow">THE APPROACH</p><p>Thoughtful dentistry starts with curiosity, continues through evidence, and comes to life through compassionate care.</p></div></section>
    <section className="section" id="expertise"><div className="wrap"><div className="section-heading"><div><p className="eyebrow">01 / EXPERTISE</p><h2>Where science meets <em>skill.</em></h2></div><p>Comprehensive training, international perspective, and a commitment to learning.</p></div><div className="cards">{expertise.map(([title,description],i)=><article className="card" key={title}><span className="eyebrow">0{i+1} /</span><div className="card-icon" aria-hidden="true">✳</div><h3>{title}</h3><p>{description}</p></article>)}</div><p className="note">Experience varies between procedures performed, assisted, and observed. Procedure totals are intentionally omitted pending verification.</p></div></section>
    <section className="section dark" id="journey"><div className="wrap"><div className="section-heading"><div><p className="eyebrow">02 / MY JOURNEY</p><h2>A global perspective.<br/><em>A lifelong curiosity.</em></h2></div><p>From India to U.S. research and advanced dental education.</p></div><div className="timeline">{experience.map(([institution,role,details],i)=><article className="timeline-item" key={institution}><span>0{i+1}</span><div><h3>{institution}</h3><p>{role}</p></div><p>{details}</p></article>)}</div></div></section>
    <section className="section research" id="research"><div className="wrap"><div className="section-heading"><div><p className="eyebrow">03 / RESEARCH & INNOVATION</p><h2>Asking better questions.<br/><em>Finding better answers.</em></h2></div><p>Science shapes how I approach clinical decisions and emerging technologies.</p></div><div className="research-grid">{research.map(([title,description],i)=><article key={title} className="research-item"><span className="eyebrow">0{i+1} / RESEARCH</span><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>
    <section className="section" id="about"><div className="wrap about-grid"><div><p className="eyebrow">04 / BEYOND THE CHAIR</p><h2>Always learning.<br/><em>Always exploring.</em></h2></div><div><p className="about-lead">My journey in dentistry began in India and has evolved through clinical practice, oncology research, periodontal science, and advanced dental education in the United States.</p><p>My interests include restorative dentistry, digital workflows, and emerging technologies. Outside dentistry, photography, surfing, sailing, and exploring new places keep me curious.</p></div></div></section>
    <section className="contact" id="contact"><div className="wrap"><p className="eyebrow">LET'S CONNECT</p><h2>Let&apos;s build something <em>meaningful.</em></h2><p>Open to associate dentist opportunities, clinical collaboration, and conversations about digital dentistry. Expected DMD graduation: May 2027.</p><p className="note">Contact details and verified professional profile links should be added before launch.</p></div></section>
    <footer><div className="wrap footer-row"><strong>Dhrtika Bhatia.</strong><span>Precision. Purpose. Progress.</span><a href="#top">Back to top ↑</a></div></footer>
  </main>;
}
