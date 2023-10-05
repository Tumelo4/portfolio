import Image from 'next/image';
import picture from '@/public/tumelo.png'
import React from 'react'
import Link from 'next/link';

const AboutSection = () => {
  return (
    <section id='about' className=' pt-36 px-[3%] min-h-screen flex flex-col md:flex-row text-center md:text-left gap-8 justify-center items-center overflow-hidden'>
        {/* Image */}
      <div className=' w-80 h-80'>
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
      {/* About content */}
      <div className=' flex flex-col w-full justify-center items-center md:items-start text-center md:text-left'>
        <h1 className=' font-bold text-lg'>About <span className=' text-[#00BFFF] capitalize'>me</span></h1>
        <h2 className=' font-semibold text-base'>Frontend Developer</h2>
        <p className=' my-8'>As a passionate and skilled Frontend Developer, I thrive on bringing creativity and functionality to life through web development. My journey in the world of programming began with a fascination for the power of technology in shaping modern digital experiences. Since then, I have honed my skills to become proficient in the latest frontend technologies and frameworks.</p>
        <Link 
          href='/cv.pdf'
          target="_blank"  
          className=' btnLink'
        >
          Read More
        </Link>
      </div>
    </section>
  )
}

export default AboutSection