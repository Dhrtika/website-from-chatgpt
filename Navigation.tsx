"use client";

import { useState } from "react";
import { site } from "../data/site";

const links = [
  { name: "Expertise", href: "#expertise" },
  { name: "Journey", href: "#journey" },
  { name: "Research", href: "#research" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <a className="brand" href="#top" aria-label="Dhrtika Bhatia, return to top">
          <span className="brand-mark" aria-hidden="true">D.</span>
          <span>{site.name}</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((x) => !x)}
        >
          <span /><span />
        </button>
        <nav id="primary-navigation" aria-label="Main navigation" className={`nav-links ${open ? "open" : ""}`}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.name}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}
