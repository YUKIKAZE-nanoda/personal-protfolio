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
            className='h-24 w-24 rounded-full border-[0.35rem] '
            />
        </div>
      </div>
    </section>
  )
}
