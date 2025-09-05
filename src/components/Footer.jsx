import React from 'react'

export default function Footer() {
  return (
    <footer className="site-footer flex flex-col items-center gap-2 p-4">
      <div>© {new Date().getFullYear()} Nandini K S — Built with care.</div>
      <div className="socials flex gap-4">
        <a
          href="https://github.com/Nandini-ks21"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/nandini-k-s-4a134531a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  )
}




