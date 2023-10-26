import Image from 'next/image';
import React, {useEffect, useState} from 'react'
import {Skill, User} from "@/app/page";
import axios from "axios";
const SkillsSection = ({skills}:User) => {
  const [arrSkills, setArrSkills] = useState<Skill[]>([]);
  const [eightSkills, setEightSkills] = useState<Skill[]>([]);
  const [openMore, setOpenMore] = useState<boolean>(false)
  useEffect(() => {
    if (skills.length !== 0) {
        const getSkills = async () => {
            const arrSkills = await Promise.all(skills.map(async (item) => {
                const apiUrl = 'https://telerfi.com/api/portfolio/retrieve/' + item.imageId;

                try {
                    const response = await axios.get(apiUrl);
                    const imageURL = "data:image/png;base64," + response.data;

                    return {
                        name: item.name,
                        imageId: imageURL
                    };
                } catch (err) {
                    return {
                        name: item.name,
                        imageId: ''
                    };
                }
            }));

            setArrSkills(arrSkills);
            setEightSkills(arrSkills.slice(0, 8));
        }
        getSkills();
    }
  }, [skills]);

  return (
    <section id='skills' className=' pt-36 px-[3%] min-h-screen w-full flex flex-col gap-8 items-start'>
      <h1 className=' w-full text-center text-[2rem] font-bold mb-4 pointer-events-none uppercase'>My <span className=' text-[#00BFFF] capitalize'>skills</span></h1>
      <div className=' w-full flex flex-wrap gap-8 justify-center pointer-events-none'>
        {/* After complition of api will use Map function */}
        {
            !openMore ? (
                eightSkills.map((item, index) => {
                    return (
                        // need to fix alignment
                        <div key={index} className=' flex flex-col gap-4 p-4 items-center outline-2 uppercase outline outline-light-secondary dark:outline-dark-secondary '>
                            <Image
                                src={item.imageId}
                                alt=''
                                width={200}
                                height={200}
                            />
                            <h1>{item.name}</h1>
                        </div>
                    )
                })
                ) :(
                arrSkills.map((item, index) => {
                    return (
                        // same here
                        <div key={index} className=' flex flex-col gap-4 p-4 items-center outline-2 uppercase outline outline-light-secondary dark:outline-dark-secondary '>
                            <Image
                                src={item.imageId}
                                alt=''
                                width={200}
                                height={200}
                            />
                            <h1>{item.name}</h1>
                        </div>
                    )
                })
            )
        }
      </div>
      <div className=' w-full flex justify-center'>
        <button
          className=' btnLink'
          onClick={() => setOpenMore(prevState => !prevState)}
        >
            {
                !openMore? (
                    <div> More skills</div>
                ):(
                    <div> Less skills</div>
                )
            }
        </button>
      </div>
    </section>
  )
}

export default SkillsSection;