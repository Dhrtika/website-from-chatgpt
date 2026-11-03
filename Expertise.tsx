import { site } from "../data/site";
export default function Expertise() {
  return (
    <section className="section section-white" id="expertise" aria-labelledby="expertise-title">
      <div className="container">
        <div className="section-intro"><p className="kicker">01 / PRACTICE</p><div><h2 id="expertise-title">Focused on the work.<br /><em>Grounded in the person.</em></h2><p>Comprehensive clinical thinking, careful execution, and curiosity about better ways to care.</p></div></div>
        <div className="expertise-grid">
          {site.expertise.map((item) => <article className="expertise-card" key={item.number}>
            <span className="card-number">{item.number}</span>
            <div className="expertise-glyph" aria-hidden="true">✳</div>
            <h3>{item.title}</h3><p>{item.description}</p>
            <div className="tag-list">{item.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
          </article>)}
        </div>
        <div className="capability-note"><strong>Approach, not just procedures.</strong><span>Clear communication, evidence-based planning, and collaboration are central to the way I work.</span></div>
      </div>
    </section>
  );
}
