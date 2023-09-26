import React from 'react'

export default function SectionHeading({children}:Sec) {
    return (
        <div className='text-3xl font-meduim capitalize mb-8'>
            {children}
        </div>
    )
}
