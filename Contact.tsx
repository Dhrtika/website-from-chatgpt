import { site } from "../data/site";
export default function Contact() {
  return (
    <section className="section contact-section" id="contact" aria-labelledby="contact-title">
      <div className="container contact-inner"><p className="kicker">05 / CONNECT</p><h2 id="contact-title">Let's build something<br /><em>meaningful.</em></h2><p>{site.contactBody}</p><p className="contact-availability">{site.availability}</p>
      <div className="actions contact-actions">
        {site.email ? <a href={`mailto:${site.email}`} className="button button-white">Send an email <span aria-hidden="true">↗</span></a> : <span className="contact-setup">Contact email will appear here once configured.</span>}
        {site.linkedinUrl && <a href={site.linkedinUrl} className="button button-outline-light" target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>}
        {site.resumeUrl && <a href={site.resumeUrl} className="button button-outline-light" target="_blank" rel="noopener noreferrer">View CV <span aria-hidden="true">↗</span></a>}
      </div></div>
    </section>
  );
}
