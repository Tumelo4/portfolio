'use client'
import React, {useEffect, useState} from 'react'
import NavBar from '@/components/NavBar'
import HomeSection from '@/components/HomeSection'
import AboutSection from '@/components/AboutSection'
import { useMode } from '@/context/ModeContext'
import SkillsSection from '@/components/SkillsSection'
import ContactSection from '@/components/ContactSection'
import ProjectsSection from '@/components/ProjectsSection'
import axios from 'axios';

export interface User {
  id: string;
  name: string;
  surname: string;
  occupation: string;
  linkedinLink: string;
  githubLink: string;
  instagramLink: string;
  pdfResumeId: string;
  imageId: string;
  home_description: string;
  about_description: string;
  skills: Skill[];
  projects: Project[];
}

export interface Skill {
  name: string;
  imageId: string;
}

export interface Project {
  title: string;
  description: string;
  imageId: string;
  link: string;
}

const Home = () => {
  const {isDarkMode} = useMode();
  const [data, setData] = useState<User>({
    id: '',
    name: '',
    surname: '',
    occupation: '',
    linkedinLink: '',
    githubLink: '',
    instagramLink: '',
    pdfResumeId: '',
    imageId: '',
    home_description: '',
    about_description: '',
    skills: [],
    projects: [],
  });

  useEffect(() => {
    // Define the API endpoint
    const apiUrl = 'https://telerfi-g5g9cwdrhhd4fpez.southafricanorth-01.azurewebsites.net/api/portfolio/user/details';
    axios
        .get(apiUrl)
        .then((response) => {
          setData(response.data);
        })
        .catch((err) => {
          // console.log(err);
        });
  }, []);

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
          <HomeSection {...data} />
          <AboutSection {...data} />
          <SkillsSection {...data} />
          <ProjectsSection {...data} />
          <ContactSection />
        </main>
      </body>
    </html>
  )
}

export default Home