import React from 'react'
type SectionHeadingProps={
    children:ReactNo
}
export default function SectionHeading({children}:SectionHeadingProps) {
    return (
        <div className='text-3xl font-meduim capitalize mb-8'>
            {children}
        </div>
    )
}
