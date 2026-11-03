import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Expertise from "../components/Expertise";
import Journey from "../components/Journey";
import Research from "../components/Research";
import About from "../components/About";
import Contact from "../components/Contact";
import { site } from "../data/site";
export default function Home() {
  return <main id="top">
    <Navigation />
    <Hero />
    <Expertise />
    <Journey />
    <Research />
    <About />
    <Contact />
    <footer className="site-footer"><div className="container footer-inner"><span>© {new Date().getFullYear()} {site.name}</span><span>Crafted with intention.</span><a href="#top">Back to top ↑</a></div></footer>
  </main>;
}
