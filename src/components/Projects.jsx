import React from 'react'
const projects = [
  {title:'Employee Management',desc:'Efficiently managing employee lifecycle processes — from onboarding to performance growth — to foster productivity, engagement, and organizational success.',tech:['React','express.js','Node.js'],url:'https://github.com/Nandini-ks21/Employee-Management'},
  {title:'AI-Dietition',desc:'AI-powered dietitian providing personalized nutrition plans and real-time guidance to promote healthier lifestyles and smarter food choices.',tech:['Python','HTML', 'CSS'],url:'https://github.com/Nandini-ks21/AI-Dietition'},
  {title:'Money-Transaction',desc:'Decentralized application for secure and transparent money transactions.',tech:['Blockchain'],url:'https://github.com/Nandini-ks21/Money-Transaction'}
]
export default function Projects(){
  return (
    <section id="projects" className="projects">
      <h2>Selected Projects</h2>
      <div className="grid">
        {projects.map((p,i)=>(
          <article key={i} className="card">
            <h3>{p.title}</h3>
            <p className="muted">{p.desc}</p>
            <div className="tech">{p.tech.join(' • ')}</div>
            <div className="card-actions">
              <a className="btn small" href={p.url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
              <a className="btn small ghost" href={`https://github.com/${new URL(p.url).pathname.split('/').slice(1,3).join('/')}`}>Open repo</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
