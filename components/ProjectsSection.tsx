import Image from 'next/image'
import React, {useEffect, useState} from 'react'
import { GoLinkExternal } from 'react-icons/go'
import {Project, User} from "@/app/page";
import axios from "axios";
import Link from "next/link";
const ProjectsSection = ({projects}:User) => {
  const [arrProjects, setArrProjects] = useState<Project[]>([]);

  useEffect(() => {
    if (projects.length !== 0) {
      const getProjects = async () => {
        const arrSkills = await Promise.all(projects.map(async (item) => {
          const apiUrl = 'https://telerfi-g5g9cwdrhhd4fpez.southafricanorth-01.azurewebsites.net/api/portfolio/retrieve/' + item.imageId;
          try {
            const response = await axios.get(apiUrl);
            const imageURL = "data:image/png;base64," + response.data;

            return {
              ...item,
              imageId: imageURL
            };
          } catch (err) {
            return {
              ...item,
              imageId: ''
            };
          }
        }));

        setArrProjects(arrSkills);
      }
      getProjects();
    }
  }, [projects]);

  return (
    <section id='projects' className=' pt-36 px-[3%] min-h-screen w-full flex flex-col gap-8 items-center md:items-start'>
      <h1 className=' text-[2rem] font-bold'>My Work</h1>
      {/* After API going to use Map function */}
      {
        arrProjects.map((item, index) => {
          return (
              <div key={index} className=" flex gap-4  flex-col md:flex-row items-center md:items-start">
                <Link
                    href={item.link}
                    target="_blank"
                    className=' relative'
                >
                  {/* The image */}
                  <div className="w-[300px]">

                    <Image
                        src={item.imageId}
                        alt="Image Alt Text"
                        width={300}
                        height={300}
                        objectFit="cover"
                    />
                  </div>
                  {/* The overlay div for the external link */}
                  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100">
                    {/* Icon */}
                    <GoLinkExternal className="text-2xl" />
                  </div>
                </Link>
                {/* card-item-infor */}
                <div className=" flex flex-col gap-4 text-center md:text-left">
                  <h3 className=' text-base uppercase font-semibold'>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
          )
        })
      }

    </section>
  )
}

export default ProjectsSection