import React from 'react'
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid'
import { SubmitHandler, useForm } from 'react-hook-form';

type Props = {}

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

function ContactMe({}: Props) {
    const{
        register,
        handleSubmit,
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (formData) => 
    {
        window.location.href = `mailto:abhinavsalgania@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}.${formData.message}`
    }

  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl lg:text-2xl'>
        Contact
        </h3>

        <div className="flex flex-col space-y-4 md:space-y-5 lg:space-y-6 xl:space-y-6 2xl:space-y-10">
            <h4 className="text-white/90  text-xl md:text-2xl font-semibold text-center">
                I am ready to take my skills to the next level.{` `}
                <span className='decoration-[cyan]/50 underline'> Let&apos;s talk.</span>
            </h4>
            
            <div className="flex flex-col items-center space-y-1 md:space-y-3 lg:space-y-3 xl:space-y-3 2xl:space-y-5">

                <div className="flex items-center space-x-5 justify-center">
                    <PhoneIcon className="text-[cyan] h-7 w-7 animate-pulse"/>
                    <p className="text-white/90 text-lg md:text-2xl lg:text-2xl">
                        +1 7x9 2x9 8xx0
                    </p>
                </div>

                <div className="flex items-center space-x-5 justify-center">
                    <EnvelopeIcon className="text-[cyan] h-7 w-7 animate-pulse"/>
                    <p className="text-white/90 text-lg md:text-2xl lg:text-2xl">
                        abhinavsalgania@gmail.com
                    </p>
                </div>

                <div className="flex items-center space-x-5 justify-center">
                    <MapPinIcon className="text-[cyan] h-7 w-7 animate-pulse"/>
                    <p className="text-white/90 text-lg md:text-2xl lg:text-2xl">
                        Toronto, ON.
                    </p>
                </div>
            </div>

            <form 
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-2 w-80 md:w-fit mx-auto">
                <div className="md:flex md:space-x-2 space-y-2 md:space-y-0 ">
                    <input 
                    {...register('name')} 
                    placeholder='Name' 
                    className='contactInput' 
                    type="text" 
                    />

                    <input 
                    {...register('email')} 
                    placeholder='Email' 
                    className='contactInput' 
                    type="email" 
                    />
                </div>

                <input 
                {...register('subject')} 
                placeholder='Subject' 
                className='contactInput' 
                type='text'
                />

                <textarea 
                {...register('message')} 
                placeholder='Message' 
                className='contactInput'
                />

                <button 
                type="submit"
                className="bg-[cyan]/50 py-3 md:py-5 px-10 rounded-lg text-white/90 font-bold text-lg">
                Submit
                </button>

            </form>

        </div>
    </div>
  )
}

export default ContactMe
