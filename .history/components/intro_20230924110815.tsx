'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CgArrowLongRight } from 'react-icons/cg'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { LuHardDriveDownload } from 'react-icons/lu'



export default function Intro() {
  const {ref}
  return (
    <section id='home' className=' mb-28 max-w-[50rem] text-center sm:mb-0 '>
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.25 }}>
            <Image src="https://unsplash.com/photos/a-plate-of-peanut-butter-and-banana-slices-Mt7cBpvCpF4"
              alt='shigure'
              width="192"
              height="192"
              quality="95"
              priority={true}
              className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl'
            />
          </motion.div>

          <motion.span className='absolute text-4xl bottom-0 right-0'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7
            }}
          >
            😜
          </motion.span>
        </div>
      </div>
      <motion.p className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl
      '
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}>
        <span className="font-bold">Hello, I'm Ricardo.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">8 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>
      </motion.p>
      <motion.div className='flex flex-col  sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium '
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link href="#contact" className='group bg-gray-900 text-white px-7 
        py-3 flex items-center gap-2 rounded-full outlin-none hover:scale-110 focus:scale-110 hover:bg-gray-950 active:scale-105 transtion'>Contact me here
          <CgArrowLongRight className="opacity-70 group-hover:translate-x-1 transition" />{""}
        </Link>
        <a className='group bg-white  px-7 py-3 flex items-center gap-2 rounded-full outlin-none hover:scale-110 focus:scale-110  active:scale-105 transition cursor-pointer border border-black/10' href="/CV.pdf" download={true}>DownLoad CV<LuHardDriveDownload className="opacity-60 group-hover:tanslate-y-1 transition" /></a>

        <a className='bg-white  p-4 text-gray-700 flex items-center gap-2 
        rounded-full outlin-none hover:scale-[1.15] focus:scale-[1.15]  active:scale-105 
        transition cursor-pointer border border-black/10'
          href='https://linkedin.com' target='_blank'><FaLinkedin /></a>
        <a className='bg-white  p-4 text-gray-700 flex items-center gap-2 
        rounded-full text-[1.15rem] outlin-none 
        hover:scale-[1.15] focus:scale-[1.15] hover:text-gray-950 
        active:scale-105 transition cursor-pointer border border-black/10'
          href='https://github.com' target='_blank'><FaGithub /></a>

      </motion.div>
    </section>
  )
}
