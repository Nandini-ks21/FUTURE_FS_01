import React from 'react'
export default function Hero(){
  return (
    <section className="hero">
      <div className="hero-inner">
        <div>
          <h1>Nandini K S-Software Developer</h1>
          <p>Design-focused developer building performant web apps. Specialities: React, UX, accessibility, and SEO.</p>
          <div className="ctas">
            <a className="btn" href="#projects">View projects</a>
            <a className="btn ghost" href="https://mail.google.com/mail/?view=cm&fs=1&to=nandiniks203@gmail.com&su=Hello%20Nandini" target="_blank" rel="noopener noreferrer">Email me (Gmail)</a>
          </div>
        </div>
        <div className="hero-card">
          <div className="avatar">NK</div>
          <div className="quick-info">
            <div><strong>Location:</strong> Banglore, India</div>
            <div><strong>Availability:</strong> Open to work</div>
          </div>
        </div>
      </div>
    </section>
  )
}
