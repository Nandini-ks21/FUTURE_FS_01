import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
export default function App(){
  return (
    <div className="app">
      <Header />
      <main className="container">
        <Hero />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
