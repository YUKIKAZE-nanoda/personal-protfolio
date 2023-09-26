import React from 'react'
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
import Image from 'next/image';
type ProjectProps = typeof projectsData[number];
function Project({ title, description, tags, imageUrl }: ProjectProps) {
    return <section className='bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8'>
        <h3 >{title}</h3>
        <p>{description}</p>
        <ul>
            {tags.map((tag, index) => (
                <li key={index}>{tag}</li>
            ))}
        </ul>
        <Image src={imageUrl} alt="Projects worked on" quality={95} />
    </section>
}
export default function Projects() {
    return (
        <section>
            <SectionHeading>My Projects</SectionHeading>
            <div>
                {
                    projectsData.map((project, index) => (
                        <React.Fragment key={index}>
                            <Project {...project} />
                        </React.Fragment>
                    ))
                }
            </div>
        </section>
    );
}
