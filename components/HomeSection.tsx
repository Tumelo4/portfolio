import Image from 'next/image';
import React, {useEffect, useState} from 'react'
import picture from '@/public/tumelo.png'
import Link from 'next/link';
import { BiLogoInstagramAlt } from 'react-icons/bi'
import { FaLinkedinIn } from 'react-icons/fa'
import { PiGithubLogoFill } from 'react-icons/pi'
import axios from "axios";
import {User} from "@/app/page";

const HomeSection = ({name,surname,occupation,home_description,imageId,linkedinLink,githubLink,instagramLink, pdfResumeId}:User) => {
  const [image, setImage] = useState("");
  const [cv, setCV] = useState("");
  useEffect(() => {
    if (imageId !== "") {
      // Define the API endpoint
      const apiUrl = 'https://telerfi-g5g9cwdrhhd4fpez.southafricanorth-01.azurewebsites.net/api/portfolio/retrieve/' + imageId;
      axios
          .get(apiUrl)
          .then((response) => {
            const imageData = "data:image/png;base64,"+ response.data;
            setImage(imageData);
          })
          .catch((err) => {
            console.log(err);
          });
    }

    if (pdfResumeId !== "") {
      const apiUrl = 'https://telerfi-g5g9cwdrhhd4fpez.southafricanorth-01.azurewebsites.net/api/portfolio/retrieve/' + pdfResumeId;
      axios
          .get(apiUrl)
          .then((response) => {

            const byteCharacters = atob(response.data);
            const chunkSize = 1024;
            const chunks = [];
            for (let i = 0; i < byteCharacters.length; i += chunkSize) {
              const chunk = byteCharacters.slice(i, i + chunkSize);
              const byteArray = new Uint8Array(chunk.length);
              for (let j = 0; j < chunk.length; j++) {
                byteArray[j] = chunk.charCodeAt(j);
              }
              chunks.push(byteArray);
            }

            const blob = new Blob(chunks, { type: 'application/pdf' });
            const pdfData = URL.createObjectURL(blob);
            setCV(pdfData);
          })
          .catch((err) => {
            console.log(err);
          });
    }
  }, [imageId, pdfResumeId]);
  return (
    <section id='home' className=' pt-36 px-[3%] min-h-screen flex gap-8 flex-col-reverse justify-between items-center md:flex-row'>
      {/* Content Design */}
      <div className=' flex flex-col text-center w-full items-center md:items-start md:text-left '>
        <span className=' text-[2rem] font-bold'>
          Hello&#44; It&#39;s me
        </span>
        <span className=' font-bold text-[3.2rem]'>
          {name} {surname}
        </span>
        <h1 className='text-[2rem] font-bold'>
          And I&#39;m a <span className=' text-[#00BFFF]'>
            {occupation}
          </span>
        </h1>
        <p className=' mt-4'>
          {home_description}
        </p>
        {/* Links */}
        <div className=' flex flex-row justify-center items-center md:justify-start'>
          {/* Linkedin */}
          <Link 
            href={linkedinLink}
            target="_blank" 
            className=' before-after-hover' 
          >
            <FaLinkedinIn />
          </Link>
          {/* Github */}
          <Link 
            href={githubLink}
            target="_blank" 
            className=' before-after-hover' 
          >
            <PiGithubLogoFill />
          </Link>
          {/* Instagram */}
          <Link 
            href={instagramLink}
            target="_blank" 
            className=' before-after-hover' 
          >
            <BiLogoInstagramAlt />
          </Link>
        </div>
        {/* cv */}
        <Link 
          href={cv}
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
              src={image}
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