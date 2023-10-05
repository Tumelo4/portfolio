import React, {useMemo, useState} from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import  {AiFillCheckCircle} from 'react-icons/ai'
import  {VscError} from 'react-icons/vsc'
import axios from "axios";

interface useFormProps {
  firstName: string,
  lastName: string,
  workEmail: string,
  workUrl: string,
  jobTitle: string,
  contactNumber?: string | undefined;
  message: string,
}
const ContactSection = () => {

  const schema = useMemo(
    () =>
        yup.object({
          firstName: yup.string().required("FirstName is a required field"),
          lastName: yup.string().required("LastName is a required field"),
          workEmail: yup.string().required("WorkEmail is a required field"),
          workUrl: yup.string().required("WorkUrl is a required field"),
          jobTitle: yup.string().required("JobTitle is a required field"),
          contactNumber: yup.string().min(10, "Contact number must be at least 10 characters"),
          message: yup.string().required("Message is a required field"),
        }),
    []
  );

  const { register, handleSubmit, formState: {errors}, reset} = useForm<useFormProps>({
    resolver: yupResolver(schema)
  });



  const handleForm  = async (data: useFormProps) => {
      const firstName = data.firstName as string;
      const lastName = data.lastName as string;
      const workEmail = data.workEmail as string;
      const workUrl = data.workUrl as string;
      const jobTitle = data.jobTitle as string;
      const contactNumber = data.contactNumber as string;
      const message = data.message as string;
      const userData = {
              firstName,
              lastName,
              workEmail,
              workUrl,
              jobTitle,
              contactNumber,
              message
            };



      const headers = {
          'Content-Type': 'application/json'
      };

      try {
          const response = await axios.post('http://localhost:8080/user/submit', userData, {
              headers: headers
          });
          console.log(response);
          const useD = 'Email sent successfully!';
          const color = useD === 'Email sent successfully!';
          const style = "rounded-[2px] gap-2 mt-5 p-2 bg-white flex justify-center"

          toast.custom((t) => (
              <div>
                  {color ? (
                      <div className={`${style} text-green-500 `}>
                          <AiFillCheckCircle className='text-2xl font-bold ' />
                          {useD}
                      </div>
                  ) : (
                      <div className={`${style} text-red-500 `}>
                          <VscError className='text-2xl font-bold ' />
                          {useD}
                      </div>
                  )}
              </div>
          ));

      } catch (error) {
          console.error(error);
      }
      reset();
  }
  return (
    <section id='contact' className=' pt-36 pb-5 px-[3%] min-h-screen w-full flex justify-center items-center flex-col gap-8 '>
      {/* Heading */}
      <h1 className=' text-[2rem] font-bold'>Contact <span className=' text-[#00BFFF] capitalize'>Me!</span></h1>
      {/* Form */}
      <form onSubmit={handleSubmit(handleForm)} className='flex max-w-[800px] flex-wrap gap-4 w-full justify-center items-center'>
        <input
          type="text"
          placeholder="First Name"
          id="firstName"
          className="input-box-style"
          {...register('firstName')}
        />
        <input
          type="text"
          placeholder="Last Name"
          id="lastName"
          className="input-box-style"
          {...register('lastName')}
        />
        <input
          type="text"
          placeholder="Work Email"
          id="workEmail"
          className="input-box-style"
          {...register('workEmail')}
        />
        <input
          type="text"
          placeholder="Work URL"
          id="workUrl"
          className="input-box-style"
          {...register('workUrl')}
        />
        <input
          type="text"
          placeholder="Job Title"
          id="jobTitle"
          className="input-box-style"
          {...register('jobTitle')}
        />
        <input
          type="text"
          placeholder="Contact Number"
          id="contactNumber"
          className="input-box-style"
          {...register('contactNumber')}
        />
        <textarea
          id="message"
          rows={2}
          placeholder="Message"
          className="input-box-style w-full"
          {...register('message')}
        />
        <button type='submit' className=' btnLink self-center'>send</button>
      </form>
        <Toaster />
    </section>
  )
}

export default ContactSection