import React from 'react'
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
type ProjectProps=typeof projectsData
function Project({title,description,tags,imageUrl}:ProjectProps) {
    return <div>{title}</div>
}
export default function Projects() {
    return (
        <section>
            <SectionHeading>My Projects</SectionHeading>
            <div>
                {
                    projectsData.map((project, index) => (
                        <React.Fragment key={index}>
                            <Project {...project}/>
                        </React.Fragment>
                    ))
                }
            </div>
        </section>
    );
}
