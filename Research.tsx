import { site } from "../data/site";
export default function Research() {
  return (
    <section className="section research-section" id="research" aria-labelledby="research-title">
      <div className="container">
        <div className="section-intro section-intro-light"><p className="kicker">03 / DISCOVERY</p><div><h2 id="research-title">Evidence fuels<br /><em>better questions.</em></h2><p>Research and technology have shaped how I understand both the science and the art of dentistry.</p></div></div>
        <div className="research-list">{site.research.map((item) => <article className="research-item" key={item.index}>
          <span className="research-index">{item.index}</span><div><h3>{item.title}</h3><p>{item.description}</p><small>{item.detail}</small></div><span className="research-spark" aria-hidden="true">↗</span>
        </article>)}</div>
      </div>
    </section>
  );
}
