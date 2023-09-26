import Image from 'next/image'
import React from 'react'

export default function Intro() {
  return (
    <section>
      <div className='flex items-center justify-center'>
        <div>
          <Image src="https://unsplash.com/photos/a-table-topped-with-flowers-and-plates-of-food-fCvMqP3MHDU"
            alt='shigure' 
            width="192"
            height="192"
            quality="95"
            priority={true}
            className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl'
            />

            <span className='absolute text-4xl'>
              😜
            </span>
        </div>
      </div>
    </section>
  )
}
