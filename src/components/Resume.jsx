import React from 'react'
export default function Resume(){
  return (
    <section id="resume" className="resume">
      <h2>Resume & Skills</h2>
      <div className="resume-grid">
        <div className="col">
          <h3>Experience</h3>
          <p> Available for roles in [Frontend / Full-Stack / Data Science] — passionate about creating value through technology.”</p>
        </div>
        <div className="col">
          <h3>Skills</h3>
          <ul className="skills">
            <li>Python</li><li>JavaScript (ES6+)</li><li>HTML & CSS</li><li>MongoDB & MySQL</li><li>Frontend Developer</li>
          </ul>
        </div>
      </div>
      <div className="download">
        <a className="btn" href="\Resume.pdf" target="_blank" rel="noopener noreferrer">Download PDF</a>
      </div>
    </section>
  )
}
