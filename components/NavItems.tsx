'use client'
import { useMode } from '@/context/ModeContext'
import { Link } from 'react-scroll';
import React from 'react'
import { BiSolidMoon, BiSolidSun } from 'react-icons/bi'


const NavItems = () => {
  const {isDarkMode, setDarkMode } = useMode();
  const navItems = [
    { id: 'home', label: 'home'},
    { id: 'about', label: 'about'},
    { id: 'skills', label: 'skills'},
    { id: 'projects', label: 'projects'},
    { id: 'contact', label: 'contact'},
  ]

  const handleMode = () => {
    setDarkMode(prevMode => !prevMode);
  }
  
  return (
    <div className='flex py-3 md:py-0 flex-col md:flex-row md:justify-between md:items-center capitalize'>
      {
        navItems.map((navItem) => {
          const { id, label } = navItem;
          return (
            <Link 
              key={id} 
              activeClass="active"
              to={id}
              spy={true}
              smooth={true}
              className=' cursor-pointer navItem'
            >
              {label}
            </Link>
          );
        })        
      }


      {/* Mode Icon */}
      <button 
        onClick={() => handleMode()}
      >
        {
          isDarkMode ? (
            // Dark Mode
            <BiSolidSun className=' text-[1.375rem] my-2 md:my-0 md:ml-[2rem] ' />
          ) : (
            // Light Mode
            <BiSolidMoon className=' text-[1.375rem] my-2 md:my-0 md:ml-[2rem] ' />
          )
        }
      </button>
    </div>
  )
}

export default NavItems