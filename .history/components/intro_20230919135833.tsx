'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

export default function Intro() {
  return (
    <section>
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
          initial={}
          >
            😜
          </motion.span>
        </div>
      </div>
    </section>
  )
}
