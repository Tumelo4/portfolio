import Image from 'next/image';
import React from 'react'
import picture from '@/public/tumelo.png'
import Link from 'next/link';
import { BiLogoInstagramAlt } from 'react-icons/bi'
import { FaLinkedinIn } from 'react-icons/fa'
import { PiGithubLogoFill } from 'react-icons/pi'


const HomeSection = () => {
  return (
    <section id='home' className=' pt-36 px-[3%] min-h-screen flex gap-8 flex-col-reverse justify-between items-center md:flex-row'>
      {/* Content Design */}
      <div className=' flex flex-col text-center w-full items-center md:items-start md:text-left '>
        <span className=' text-[2rem] font-bold'>
          Hello&#44; It&#39;s me
        </span>
        <span className=' font-bold text-[3.2rem]'>
          Tumelo Mosomane
        </span>
        <h1 className='text-[2rem] font-bold'>
          And I&#39;m a <span className=' text-[#00BFFF]'>
            Frontend developer
          </span>
        </h1>
        <p className=' mt-4'>
          with a strong understanding of JavaScript and expertise in frameworks like React and Next.js. My focus is on creating exceptional digital experiences that consistently exceed user expectations.
        </p>
        {/* Links */}
        <div className=' flex flex-row justify-center items-center md:justify-start'>
          {/* Linkedin */}
          <Link 
            href='https://www.linkedin.com/in/tumelo4' 
            target="_blank" 
            className=' before-after-hover' 
          >
            <FaLinkedinIn />
          </Link>
          {/* Github */}
          <Link 
            href='https://github.com/Tumelo4' 
            target="_blank" 
            className=' before-after-hover' 
          >
            <PiGithubLogoFill />
          </Link>
          {/* Instagram */}
          <Link 
            href='https://www.instagram.com/mosoz_tumelo' 
            target="_blank" 
            className=' before-after-hover' 
          >
            <BiLogoInstagramAlt />
          </Link>
        </div>
        {/* cv */}
        <Link 
          href='/cv.pdf'
          target="_blank"  
          className=' btnLink'
        >
          view cv
        </Link>
      </div>
      {/* Image */}
      <div className=' w-80 h-80 animate-bounce-slow'>
        <div className=' flex justify-center items-center w-80 h-80 rounded-full animate-spin-slow bg-gradient-to-r from-[#FF7F50] to-[#00BFFF]'>
          <div className=' bg-light-primary dark:bg-dark-primary w-[19rem] h-[19rem] rounded-full overflow-hidden animate-backspin'>
            <Image 
              src={picture}
              alt=''
              width={320} 
              height={320}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeSection;