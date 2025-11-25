import React from 'react'
import InfiniteListWithDetail from '../JS/InfiniteListWithDetail'

// Optimized image import helper - reduces repetitive imports
const importProjectImages = (projectName) => {
  const basePath = '../assets/Project Overview/'
  return {
    avif400: new URL(`${basePath}${projectName}-400.avif`, import.meta.url).href,
    avif800: new URL(`${basePath}${projectName}-800.avif`, import.meta.url).href,
    avif1200: new URL(`${basePath}${projectName}-1200.avif`, import.meta.url).href,
    webp400: new URL(`${basePath}${projectName}-400.webp`, import.meta.url).href,
    webp800: new URL(`${basePath}${projectName}-800.webp`, import.meta.url).href,
    webp1200: new URL(`${basePath}${projectName}-1200.webp`, import.meta.url).href,
  }
}

function smoothScrollToId(id, duration = 600) {
  const el = document.getElementById(id.replace('#', ''))
  if (!el) return
  const navbar = document.querySelector('.glass-navbar')
  const offset = (navbar && navbar.offsetHeight) ? navbar.offsetHeight : 72
  const start = window.scrollY || window.pageYOffset
  const end = el.getBoundingClientRect().top + start - offset - 8
  const distance = end - start
  let startTime = null

  function easeInOutQuad(t) { return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t }

  function animate(time) {
    if (!startTime) startTime = time
    const timeElapsed = time - startTime
    const progress = Math.min(timeElapsed / duration, 1)
    const eased = easeInOutQuad(progress)
    window.scrollTo(0, Math.round(start + distance * eased))
    if (timeElapsed < duration) requestAnimationFrame(animate)
  }

  requestAnimationFrame(animate)
}

function Tooltip({ text, children }) {
  return (
    <span className="gh-tooltip-wrapper" tabIndex={0}>
      {children}
      <span className="gh-tooltip">{text}</span>
    </span>
  )
}

function ProjectsSection() {
  // Projects organized by impact and complexity (most impactful/complex first)
  const projects = [
    {
      title: 'L.I.N.N.Y',
      description: 'Inspired by J.A.R.V.I.S., L.I.N.N.Y. (Loyal Intelligent Neural Network for You) is a personal AI assistant that provides real-time verbal responses and manages daily tasks such as checking the time, weather updates, and schedule management with efficiency and precision.',
      tags: ['Python', 'Gemini 2.0 Flash API', 'Grok API', 'Perplexity API'],
      repoUrl: 'https://github.com/kidlatpogi/L.I.N.N.Y',
      images: importProjectImages('Linny')
    },
    {
      title: 'SafeLink Mobile',
      description: 'SafeLink is a React Native/Expo app for family safety with emergency broadcasts and evacuation info using Firebase and OpenStreetMap.',
      tags: ['React Native', 'JavaScript', 'Firebase', 'Mobile'],
      repoUrl: 'https://github.com/kidlatpogi/SafeLink',
      images: importProjectImages('SafeLink')
    },
    {
      title: 'Room Reservation System',
      description: 'A web-based system for classroom and laboratory reservations with admin controls and real-time updates.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'SQL'],
      repoUrl: 'https://github.com/kidlatpogi/Room-Reservation-System',
      images: importProjectImages('RoomReservationSystem')
    },
    {
      title: 'MyPC E-Commerce Shop',
      description: 'MyPC is a web-based e-commerce platform developed for the Information Assurance and Security course. This emulates a real-world online store where users can browse, select, and purchase computer components and accessories.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'XAMPP', 'MySQL'],
      repoUrl: 'https://github.com/kidlatpogi/InfoSec-MyPC.git',
      visitUrl: 'https://mypcinfosec.vercel.app',
      images: importProjectImages('MyPC')
    },
    {
      title: 'Web Tools',
      description: 'A collection of web-based utilities including A.I., Designs and Visuals, Core Development Tools etc... That aims to provide users what they need in Web Development in one place.',
      tags: ['React JS', 'JavaScript', 'CSS3', 'HTML5'],
      repoUrl: 'https://github.com/kidlatpogi/Web-tools.git',
      visitUrl: 'https://wtoolz.vercel.app/',
      images: importProjectImages('WebToolz')
    },
    {
      title: 'Calendar Widget',
      description: 'A sleek and lightweight Windows Calendar Widget seamlessly connected to Google Calendar — without relying on any external databases or APIs.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Electron'],
      repoUrl: 'https://github.com/kidlatpogi/Calendar-Widget',
      downloadUrl: 'https://github.com/kidlatpogi/Calendar-Widget/releases/latest',
      images: importProjectImages('CalendarWidget')
    },
  ]

  return (
    <section className='Projects' id='Projects'>
      <div className="container">
        <h2>Projects</h2>
        <p>Real-world applications demonstrating front-end development, database management, and problem-solving skills.</p>

        <InfiniteListWithDetail projects={projects} />

        <div className="project-buttons-grid">
          <button
            className="project-showcase-btn gallery-btn"
            onClick={() => smoothScrollToId('ExpandingCards')}
          >
            <span>See Photoshop Gallery</span>
            <svg className="arrow-down-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </button>

          <a
            href="https://github.com/kidlatpogi/Olympus"
            target="_blank"
            rel="noopener noreferrer"
            className="project-showcase-btn olympus-btn"
          >
            <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.82a7.65 7.65 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
            <span>Explore my Side Projects</span>
            <svg className="arrow-right-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
