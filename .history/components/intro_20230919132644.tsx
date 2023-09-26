import Image from 'next/image'
import React from 'react'

export default function Intro() {
  return (
    <section>
      <div className='flex items-center justify-center'>
        <div>
          <Image src="https://unsplash.com/photos/a-couple-of-purple-flowers-sitting-on-top-of-a-table-nwBIdpYt9UU"
            alt='shigure' />
        </div>
      </div>
    </section>
  )
}
