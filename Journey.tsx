import { site } from "../data/site";
export default function Journey() {
  return (
    <section className="section journey-section" id="journey" aria-labelledby="journey-title">
      <div className="container">
        <div className="section-intro"><p className="kicker">02 / JOURNEY</p><div><h2 id="journey-title">Different disciplines.<br /><em>One continuous pursuit.</em></h2><p>From dental training in India to U.S. clinical research and dental education, each chapter informs the next.</p></div></div>
        <div className="timeline">
          {site.experience.map((job, i) => <article className="timeline-row" key={job.organization}>
            <div className="timeline-period">{job.period}</div>
            <div className="timeline-marker"><span>{String(i+1).padStart(2,"0")}</span></div>
            <div className="timeline-main"><h3>{job.organization}</h3><p className="timeline-role">{job.role}</p><p className="timeline-details">{job.details}</p></div>
          </article>)}
        </div>
      </div>
    </section>
  );
}
