import { portrait } from "./portrait";

const clinical = [
  {name:"Comprehensive & Restorative Dentistry",tag:"DIRECT PATIENT CARE",detail:"Patient examination, diagnosis, individualized treatment planning, preventive dentistry, direct restorations, anterior aesthetics, crown preparations, provisional restorations, and fixed prosthodontic workflows.",tags:["Treatment planning","Composite restorations","Crowns & bridges","Anterior aesthetics"]},
  {name:"Endodontics & Periodontics",tag:"CLINICAL TRAINING",detail:"Root canal treatment, pulpal and periapical diagnosis, periodontal evaluation, nonsurgical periodontal therapy, and maintenance planning, with emphasis on integrating evidence and clinical findings.",tags:["Root canal treatment","Periodontal assessment","Nonsurgical therapy"]},
  {name:"Removable Prosthodontics",tag:"CLINICAL TRAINING",detail:"Partial denture assessment and design, diagnostic casts, impression workflows, provisional removable appliances, and treatment planning for complex restorative needs.",tags:["RPDs","Impressions","Occlusal planning"]},
  {name:"Oral Surgery & Implant Dentistry",tag:"PERFORMED / ASSISTED / OBSERVED",detail:"Clinical extraction experience and assisting in advanced oral and maxillofacial procedures, including facial trauma, jaw reconstruction, sinus lift, and implant surgery. Exposure is distinguished from independently performed treatment.",tags:["Dental extractions","Surgical assisting","Implant restorations"]},
  {name:"Digital Dentistry",tag:"TECHNOLOGY & DEVELOPMENT",detail:"Interest and training exposure in digital impressions, CAD/CAM design, 3D printing, and emerging technologies that enhance predictable restorative workflows. Software interests include Exocad and 3Shape.",tags:["Digital scanning","CAD/CAM","Exocad & 3Shape","3D printing"]}
];
const roles = [
 {date:"2025 — 2027",title:"Doctor of Dental Medicine Candidate",org:"Temple University Kornberg School of Dentistry · Philadelphia",copy:"Advanced clinical training in comprehensive dentistry, case planning, restorative care, endodontics, prosthodontics, periodontics, and patient communication."},
 {date:"2023 — 2025",title:"Periodontal Research Specialist",org:"University of Pennsylvania School of Dental Medicine",copy:"Investigated periodontal ligament biology in the context of diabetes. Supported biomarker work, multi-site collaboration, and laboratory-to-clinic research coordination."},
 {date:"2022 — 2023",title:"Research Associate",org:"UC San Diego · Moores Cancer Center",copy:"Supported NIH-funded salivary biomarker research related to HPV-associated disease; contributed to DNA extraction, qPCR, clinical data management, analysis, and manuscript preparation."},
 {date:"2016 — 2021",title:"Bachelor of Dental Surgery",org:"Bharati Vidyapeeth · India",copy:"Built a foundation in comprehensive dental treatment and clinical patient care. Additional surgical exposure included assisting in oral and maxillofacial surgery and oncology-related settings."}
];
const research = [
 {k:"ONCOLOGY RESEARCH",title:"Salivary biomarkers & HPV-related disease",body:"At UC San Diego's Moores Cancer Center, supported the investigation of salivary biomarkers, with experience in clinical data collection, molecular methods including qPCR, and analysis."},
 {k:"PERIODONTAL RESEARCH",title:"Diabetes, inflammation & periodontal biology",body:"At the University of Pennsylvania, contributed to work investigating periodontal ligament responses and biologic links between systemic disease and oral health."},
 {k:"CLINICAL INNOVATION",title:"Digital workflows & emerging technologies",body:"An evolving professional interest in more efficient, precise restorative workflows, including 3D printing, scanning, CAD/CAM, and research-driven technology adoption."}
];
const highlights = [
 {value:"2027",label:"Expected DMD graduation"},
 {value:"2",label:"U.S. research institutions"},
 {value:"India + U.S.",label:"International clinical perspective"}
];

export default function Home(){
 return <main id="top">
  <header className="header"><div className="wrap header-row">
   <a className="brand" href="#top">Dhrtika Bhatia<span>.</span></a>
   <nav aria-label="Main navigation"><a href="#clinical">Clinical</a><a href="#experience">Experience</a><a href="#research">Research</a><a href="#about">About</a></nav>
   <a className="contact-link" href="#contact">Connect ↗</a>
  </div></header>
  <section className="hero"><div className="wrap hero-grid">
   <div className="hero-text"><p className="eyebrow">INTERNATIONALLY TRAINED DENTIST · DMD CANDIDATE</p>
    <h1>Clinical depth.<br/><em>Thoughtful care.</em></h1>
    <p className="intro">A future associate dentist combining international clinical experience, U.S. dental education, and research-driven thinking to deliver comprehensive, patient-centered care.</p>
    <p className="hero-credential">Temple University Kornberg School of Dentistry <span>·</span> Expected May 2027</p>
    <div className="buttons"><a className="button primary" href="#clinical">Explore clinical experience ↗</a><a className="button secondary" href="#contact">Recruitment inquiries</a></div>
    <p className="scroll-label">RESTORATIVE DENTISTRY / RESEARCH / INNOVATION</p>
   </div>
   <div className="hero-photo"><img src={portrait} alt="Portrait of Dhrtika Bhatia" width="480" height="480" /><span className="photo-caption">CLINICIAN · RESEARCHER · INNOVATOR</span></div>
  </div></section>
  <section className="manifesto"><div className="wrap manifesto-grid"><p className="eyebrow">A PRACTICE-READY MINDSET</p><p>Comprehensive treatment planning. Clear patient communication. A commitment to clinical excellence, mentorship, and long-term growth.</p></div></section>
  <section className="section overview" id="overview"><div className="wrap"><div className="section-heading"><div><p className="eyebrow">AT A GLANCE</p><h2>Experience shaped by<br/><em>two healthcare systems.</em></h2></div><p>Clinical education and applied research across India and the United States.</p></div>
    <div className="highlights">{highlights.map(h=><div className="highlight" key={h.label}><strong>{h.value}</strong><span>{h.label}</span></div>)}</div>
    <p className="note">Clinical procedure counts from the previous website are being reconciled to accurately distinguish treatment performed, assisted, and observed. Detailed verified counts can be added here.</p>
  </div></section>
  <section className="section" id="clinical"><div className="wrap"><div className="section-heading"><div><p className="eyebrow">01 / CLINICAL CAPABILITIES</p><h2>Comprehensive care.<br/><em>Practical experience.</em></h2></div><p>Relevant training and experience for an associate dentist role, with clear distinctions between care delivered and surgical assisting.</p></div>
   <div className="clinical-grid">{clinical.map((c,i)=><article className="clinical-card" key={c.name}><div className="card-top"><span className="eyebrow">0{i+1} / {c.tag}</span><span aria-hidden="true">✳</span></div><h3>{c.name}</h3><p>{c.detail}</p><div className="skill-tags">{c.tags.map(t=><span key={t}>{t}</span>)}</div></article>)}</div>
  </div></section>
  <section className="section dark" id="experience"><div className="wrap"><div className="section-heading"><div><p className="eyebrow">02 / EDUCATION & EXPERIENCE</p><h2>A global foundation.<br/><em>A clinical future.</em></h2></div><p>From international dental training to U.S. research and patient care.</p></div>
    <div className="timeline">{roles.map((r,i)=><article className="timeline-item" key={r.title}><span className="timeline-date">{r.date}</span><div><h3>{r.title}</h3><p className="org">{r.org}</p></div><p>{r.copy}</p></article>)}</div>
  </div></section>
  <section className="section research" id="research"><div className="wrap"><div className="section-heading"><div><p className="eyebrow">03 / RESEARCH</p><h2>Science informs<br/><em>every decision.</em></h2></div><p>Clinical research experience that supports careful interpretation of evidence and interdisciplinary collaboration.</p></div>
    <div className="research-grid">{research.map((r,i)=><article className="research-item" key={r.title}><span className="eyebrow">0{i+1} / {r.k}</span><h3>{r.title}</h3><p>{r.body}</p></article>)}</div>
  </div></section>
  <section className="section employer-section"><div className="wrap employer-grid"><div><p className="eyebrow">04 / WHAT I BRING TO A PRACTICE</p><h2>Ready to contribute.<br/><em>Eager to grow.</em></h2></div><div className="employer-points">
     <p><strong>Comprehensive mindset.</strong> Treatment planning that considers restorative needs, function, aesthetics, prevention, and patient priorities.</p>
     <p><strong>Team collaboration.</strong> Experience across research, clinical care, and multidisciplinary environments.</p>
     <p><strong>Patient-centered communication.</strong> A commitment to education, trust, and clear expectations.</p>
     <p><strong>Long-term growth.</strong> Interest in mentorship, quality improvement, digital workflows, and building lasting patient relationships.</p>
   </div></div></section>
  <section className="section about-section" id="about"><div className="wrap about-grid">
   <div className="about-portrait"><img src={portrait} alt="Dhrtika Bhatia in a white clinical coat" width="360" height="360" loading="lazy"/></div>
   <div><p className="eyebrow">05 / BEYOND THE CHAIR</p><h2>Curiosity is<br/><em>part of my practice.</em></h2><p className="about-lead">My path in dentistry started in India and has grown through clinical experience, cancer research, periodontal science, and advanced U.S. dental education.</p><p>I value the intersection of clinical precision, evidence, and human connection. Outside the operatory, photography, sailing, surfing, and exploration inspire creativity and perspective.</p></div>
  </div></section>
  <section className="contact" id="contact"><div className="wrap"><p className="eyebrow">LET'S CONNECT</p><h2>Looking ahead to<br/><em>May 2027.</em></h2><p>Interested in associate dentist opportunities with supportive teams, comprehensive patient care, clinical mentorship, and opportunities for professional growth. I welcome conversations with practice owners, recruiters, and clinical leaders.</p><div className="buttons"><a className="button light" href="https://www.dhrtika.com/" target="_blank" rel="noopener noreferrer">View existing professional site ↗</a></div><p className="note">Add a verified email, LinkedIn profile, and downloadable CV before public launch. The current button is a temporary link to the existing website, not an application endpoint.</p></div></section>
  <footer><div className="wrap footer-row"><strong>Dhrtika Bhatia.</strong><span>Dentistry · Research · Innovation</span><a href="#top">Back to top ↑</a></div></footer>
 </main>
}
