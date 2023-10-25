import Image from 'next/image';
import React, {useEffect, useState} from 'react'
import { Box, Fade, Modal } from '@mui/material'
import {User} from "@/app/page";
import axios from "axios";

export const styleBox = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    overflow: 'auto',
    transform: 'translate(-50%, -50%)',
    '&:focus': {
        outline: 'none',
    },
};

const AboutSection = ({occupation, about_description, imageId}:User) => {
    const [image, setImage] = useState("");
    const [openMore, setOpenMore] = useState(false);
    useEffect(() => {
        if (imageId !== "") {
            // Define the API endpoint
            const apiUrl = 'https://telerfi.com/api/portfolio/retrieve/' + imageId;
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
    }, [imageId]);
  return (
    <section id='about' className=' pt-36 px-[3%] min-h-screen flex flex-col md:flex-row text-center md:text-left gap-8 justify-center items-center overflow-hidden'>
        {/* Image */}
      <div className=' w-80 h-80'>
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
      {/* About content */}
      <div className=' flex flex-col w-full justify-center items-center md:items-start text-center md:text-left'>
        <h1 className=' font-bold text-lg'>About <span className=' text-[#00BFFF] capitalize'>me</span></h1>
        <h2 className=' font-semibold text-base'>{occupation}</h2>
        <p className=' my-8 aboutText'>{about_description}</p>
        <button
          className=' btnLink'
          onClick={() => setOpenMore(true)}
        >
          Read More
        </button>

          <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={openMore}
              onClose={() => setOpenMore(false)}
              closeAfterTransition
          >
              <Fade in={openMore}>
                  <Box sx={styleBox}>
                      {/*    */}
                      <div className=' p-8 flex flex-col bg-light-primary dark:bg-dark-primary flex justify-center items-center text-center'>
                          <h1 className=' font-bold text-lg'>About <span className=' text-[#00BFFF] capitalize'>me</span></h1>
                          <p className=' my-8 mb-0'>{about_description}</p>
                      </div>
                  </Box>
              </Fade>
          </Modal>
      </div>
    </section>
  )
}

export default AboutSection