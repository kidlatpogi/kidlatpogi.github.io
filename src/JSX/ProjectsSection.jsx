import React from 'react'
import InfiniteListWithDetail from '../JS/InfiniteListWithDetail'

// Linny images
import Linny400avif from '../assets/Project Overview/Linny-400.avif'
import Linny800avif from '../assets/Project Overview/Linny-800.avif'
import Linny1200avif from '../assets/Project Overview/Linny-1200.avif'
import Linny400webp from '../assets/Project Overview/Linny-400.webp'
import Linny800webp from '../assets/Project Overview/Linny-800.webp'
import Linny1200webp from '../assets/Project Overview/Linny-1200.webp'

// SafeLink images
import SafeLink400avif from '../assets/Project Overview/SafeLink-400.avif'
import SafeLink800avif from '../assets/Project Overview/SafeLink-800.avif'
import SafeLink1200avif from '../assets/Project Overview/SafeLink-1200.avif'
import SafeLink400webp from '../assets/Project Overview/SafeLink-400.webp'
import SafeLink800webp from '../assets/Project Overview/SafeLink-800.webp'
import SafeLink1200webp from '../assets/Project Overview/SafeLink-1200.webp'

// Room Reservation System images
import RoomReservation400avif from '../assets/Project Overview/RoomReservationSystem-400.avif'
import RoomReservation800avif from '../assets/Project Overview/RoomReservationSystem-800.avif'
import RoomReservation1200avif from '../assets/Project Overview/RoomReservationSystem-1200.avif'
import RoomReservation400webp from '../assets/Project Overview/RoomReservationSystem-400.webp'
import RoomReservation800webp from '../assets/Project Overview/RoomReservationSystem-800.webp'
import RoomReservation1200webp from '../assets/Project Overview/RoomReservationSystem-1200.webp'

// MyPC images
import MyPC400avif from '../assets/Project Overview/MyPC-400.avif'
import MyPC800avif from '../assets/Project Overview/MyPC-800.avif'
import MyPC1200avif from '../assets/Project Overview/MyPC-1200.avif'
import MyPC400webp from '../assets/Project Overview/MyPC-400.webp'
import MyPC800webp from '../assets/Project Overview/MyPC-800.webp'
import MyPC1200webp from '../assets/Project Overview/MyPC-1200.webp'

// WebToolz images
import WebToolz400avif from '../assets/Project Overview/WebToolz-400.avif'
import WebToolz800avif from '../assets/Project Overview/WebToolz-800.avif'
import WebToolz1200avif from '../assets/Project Overview/WebToolz-1200.avif'
import WebToolz400webp from '../assets/Project Overview/WebToolz-400.webp'
import WebToolz800webp from '../assets/Project Overview/WebToolz-800.webp'
import WebToolz1200webp from '../assets/Project Overview/WebToolz-1200.webp'

// Calendar Widget images
import CalendarWidget400avif from '../assets/Project Overview/CalendarWidget-400.avif'
import CalendarWidget800avif from '../assets/Project Overview/CalendarWidget-800.avif'
import CalendarWidget1200avif from '../assets/Project Overview/CalendarWidget-1200.avif'
import CalendarWidget400webp from '../assets/Project Overview/CalendarWidget-400.webp'
import CalendarWidget800webp from '../assets/Project Overview/CalendarWidget-800.webp'
import CalendarWidget1200webp from '../assets/Project Overview/CalendarWidget-1200.webp'

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
      description: 'Inspired by J.A.R.V.I.S., L.I.N.N.Y. (Loyal Intelligent Neural Network for You) is a personal AI assistant that provides real-time verbal responses, manages daily tasks like checking the time, weather, and schedule, and seamlessly connects to Tapo smart devices via Kasa for efficient home automation.',
      tags: ['Python', 'Generative AI', 'IoT Automation', 'Voice Control'],
      repoUrl: 'https://github.com/kidlatpogi/L.I.N.N.Y',
      images: { avif400: Linny400avif, avif800: Linny800avif, avif1200: Linny1200avif, webp400: Linny400webp, webp800: Linny800webp, webp1200: Linny1200webp }
    },
    {
      title: 'SafeLink Mobile',
      description: 'SafeLink is a React Native/Expo app for family safety with emergency broadcasts and evacuation info using Firebase and OpenStreetMap.',
      tags: ['React Native', 'JavaScript', 'Firebase', 'Mobile'],
      repoUrl: 'https://github.com/kidlatpogi/SafeLink',
      images: { avif400: SafeLink400avif, avif800: SafeLink800avif, avif1200: SafeLink1200avif, webp400: SafeLink400webp, webp800: SafeLink800webp, webp1200: SafeLink1200webp }
    },
    {
      title: 'Room Reservation System',
      description: 'A web-based system for classroom and laboratory reservations with admin controls and real-time updates.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'SQL'],
      repoUrl: 'https://github.com/kidlatpogi/Room-Reservation-System',
      images: { avif400: RoomReservation400avif, avif800: RoomReservation800avif, avif1200: RoomReservation1200avif, webp400: RoomReservation400webp, webp800: RoomReservation800webp, webp1200: RoomReservation1200webp }
    },
    {
      title: 'MyPC E-Commerce Shop',
      description: 'MyPC is a web-based e-commerce platform developed for the Information Assurance and Security course. This emulates a real-world online store where users can browse, select, and purchase computer components and accessories.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'XAMPP', 'MySQL'],
      repoUrl: 'https://github.com/kidlatpogi/InfoSec-MyPC.git',
      visitUrl: 'https://mypcinfosec.vercel.app',
      images: { avif400: MyPC400avif, avif800: MyPC800avif, avif1200: MyPC1200avif, webp400: MyPC400webp, webp800: MyPC800webp, webp1200: MyPC1200webp }
    },
    {
      title: 'Web Tools',
      description: 'A collection of web-based utilities including A.I., Designs and Visuals, Core Development Tools etc... That aims to provide users what they need in Web Development in one place.',
      tags: ['React JS', 'JavaScript', 'CSS3', 'HTML5'],
      repoUrl: 'https://github.com/kidlatpogi/Web-tools.git',
      visitUrl: 'https://wtoolz.vercel.app/',
      images: { avif400: WebToolz400avif, avif800: WebToolz800avif, avif1200: WebToolz1200avif, webp400: WebToolz400webp, webp800: WebToolz800webp, webp1200: WebToolz1200webp }
    },
    {
      title: 'Calendar Widget',
      description: 'A sleek and lightweight Windows Calendar Widget seamlessly connected to Google Calendar — without relying on any external databases or APIs.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Electron'],
      repoUrl: 'https://github.com/kidlatpogi/Calendar-Widget',
      downloadUrl: 'https://github.com/kidlatpogi/Calendar-Widget/releases/latest',
      images: { avif400: CalendarWidget400avif, avif800: CalendarWidget800avif, avif1200: CalendarWidget1200avif, webp400: CalendarWidget400webp, webp800: CalendarWidget800webp, webp1200: CalendarWidget1200webp }
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
