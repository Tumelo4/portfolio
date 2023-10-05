import Image from 'next/image';
import React from 'react'
import cpp from '@/public/cpp.png'
import Link from 'next/link';


const SkillsSection = () => {
  return (
    <section id='skills' className=' pt-36 px-[3%] min-h-screen w-full flex flex-col gap-8 items-start'>
      <h1 className=' w-full text-center text-[2rem] font-bold mb-4 pointer-events-none uppercase'>My <span className=' text-[#00BFFF] capitalize'>skills</span></h1>
      <div className=' w-full flex flex-wrap gap-8 justify-center pointer-events-none'>
        {/* After complition of api will use Map function */}
        <div className=' flex flex-col gap-4 p-4 items-center outline-2 uppercase outline outline-light-secondary dark:outline-dark-secondary '>
          <Image 
            src={cpp}
            alt=''
            width={200} 
            height={200}
          />
          <h1>c++</h1>
        </div>

        <div className=' flex flex-col gap-4 p-4 items-center outline-2 uppercase outline outline-light-secondary dark:outline-dark-secondary '>
          <Image 
            src={cpp}
            alt=''
            width={200} 
            height={200}
          />
          <h1>c++</h1>
        </div>

        <div className=' flex flex-col gap-4 p-4 items-center outline-2 uppercase outline outline-light-secondary dark:outline-dark-secondary '>
          <Image 
            src={cpp}
            alt=''
            width={200} 
            height={200}
          />
          <h1>c++</h1>
        </div>

        <div className=' flex flex-col gap-4 p-4 items-center outline-2 uppercase outline outline-light-secondary dark:outline-dark-secondary '>
          <Image 
            src={cpp}
            alt=''
            width={200} 
            height={200}
          />
          <h1>c++</h1>
        </div>


        <div className=' flex flex-col gap-4 p-4 items-center outline-2 uppercase outline outline-light-secondary dark:outline-dark-secondary '>
          <Image 
            src={cpp}
            alt=''
            width={200} 
            height={200}
          />
          <h1>c++</h1>
        </div>

        <div className=' flex flex-col gap-4 p-4 items-center outline-2 uppercase outline outline-light-secondary dark:outline-dark-secondary '>
          <Image 
            src={cpp}
            alt=''
            width={200} 
            height={200}
          />
          <h1>c++</h1>
        </div>

      </div>
      <div className=' w-full flex justify-center'>
        <Link 
          href='/cv.pdf'
          target="_blank"  
          className=' btnLink'
        >
          More skills
        </Link>
      </div>
    </section>
  )
}

export default SkillsSection;