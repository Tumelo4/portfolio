'use client'
import React from 'react'
import NavBar from '@/components/NavBar'
import HomeSection from '@/components/HomeSection'
import AboutSection from '@/components/AboutSection'
import { useMode } from '@/context/ModeContext'
import SkillsSection from '@/components/SkillsSection'
import ContactSection from '@/components/ContactSection'
import ProjectsSection from '@/components/ProjectsSection'

const Home = () => {
  const {isDarkMode} = useMode();

  const theme = ` 
    ${isDarkMode ? 'dark' : ''}
    text-light-secondary
    bg-light-primary
    dark:bg-dark-primary
    dark:text-dark-secondary`;
  
  return (
    <html lang="en" className={isDarkMode ? 'dark' : ''}>
      <body className="
        text-light-secondary
        bg-light-primary
        dark:bg-dark-primary
        dark:text-dark-secondary
      ">
        <main className=' max-w-[1248px] mx-auto overflow-hidden'>
          <NavBar />
          <HomeSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
      </body>
    </html>
  )
}

export default Home