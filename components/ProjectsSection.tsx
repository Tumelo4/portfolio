import Image from 'next/image'
import React from 'react'
import amazon from '@/public/amazon-clone.png'

const ProjectsSection = () => {
  return (
    <section id='projects' className=' pt-36 px-[3%] min-h-screen w-full flex flex-col gap-8 items-center md:items-start'>
      <h1 className=' text-[2rem] font-bold'>My Work</h1>
      {/* After API going to use Map function */}
      <div className=" flex gap-4  flex-col md:flex-row items-center md:items-start">
        <Image 
          src={amazon}
          alt=''
          width={300} 
          height={200}
        />
        {/* card-item-infor */}
        <div className=" flex flex-col gap-4 text-center md:text-left">
          <h3 className=' font-medium text-base'>Amazon Clone</h3>          
          <p>
            Developed a fully-functional Amazon clone web application.
            Implemented user authentication, payment processing, and
            order management features using Stripe API and Firebase
            database, resulting in a seamless and secure shopping
            experience for users.
            Designed responsive user interfaces with a 90+ Google
            PageSpeed score, ensuring optimal user experience across
            devices and enhancing user engagement.
            Successfully deployed the application on Vercel, achieving
            99.9% uptime and enabling global access for users.
          </p>
        </div>
      </div>

      <div className=" flex gap-4  flex-col md:flex-row items-center md:items-start">
        <Image 
          src={amazon}
          alt=''
          width={300} 
          height={200}
        />
        {/* card-item-infor */}
        <div className=" flex flex-col gap-4 text-center md:text-left ">
          <h3 className=' font-medium text-base'>Amazon Clone</h3>          
          <p>
            Developed a fully-functional Amazon clone web application.
            Implemented user authentication, payment processing, and
            order management features using Stripe API and Firebase
            database, resulting in a seamless and secure shopping
            experience for users.
            Designed responsive user interfaces with a 90+ Google
            PageSpeed score, ensuring optimal user experience across
            devices and enhancing user engagement.
            Successfully deployed the application on Vercel, achieving
            99.9% uptime and enabling global access for users.
          </p>
        </div>
      </div>

      <div className=" flex gap-4  flex-col md:flex-row items-center md:items-start">
        <Image 
          src={amazon}
          alt=''
          width={300} 
          height={200}
        />
        {/* card-item-infor */}
        <div className=" flex flex-col gap-4 text-center md:text-left">
          <h3 className=' font-medium text-base'>Amazon Clone</h3>          
          <p>
            Developed a fully-functional Amazon clone web application.
            Implemented user authentication, payment processing, and
            order management features using Stripe API and Firebase
            database, resulting in a seamless and secure shopping
            experience for users.
            Designed responsive user interfaces with a 90+ Google
            PageSpeed score, ensuring optimal user experience across
            devices and enhancing user engagement.
            Successfully deployed the application on Vercel, achieving
            99.9% uptime and enabling global access for users.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection