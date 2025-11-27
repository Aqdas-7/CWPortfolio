import React from "react";
import "./App.css";
import { works } from "./data/works"; 

export default function PortfolioLanding() {
  return (
    <div className="page">
      
      <header className="nav">
        <div className="nav-left">Neda Amber</div>
        <nav className="nav-right">
          
          <a href="#summary">Summary</a>
          <a href="#about">Work</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="summary">
        <h1>
          Communications
          <br />
          and Writing
          <br />
          Professional
        </h1>
        <p>
          From technical and academic to creative and poetic writing, I am a writer at heart. That heart is
          shared with Data Analysis and Research.
        </p>
      </section>

      <section id="about" className="about works">
        <div className="grid works-grid">
          {works.map((w, i) => {
            const link = w.link || `/blog/${i}`;
            return (
              <div className="item" key={i}>
                <a
                  className="thumb-link"
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="thumb">
                    <img src={w.img} alt={w.title} />
                  </div>
                </a>

                <h3>{w.title}</h3>
                <p>{w.subtitle}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="contact">
        <footer className="footer">
          <div>
            <div className="footer-name">Neda Amber</div>
            <div className="footer-contact">(+91) 73668 41175 | nedaamber@gmail.com</div>
            <div className="footer-copy">© Neda Amber, 2025</div>
          </div>
        </footer>
      </section>
    </div>
  );
}