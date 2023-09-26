import React from 'react'
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
type ProjectProps = typeof projectsData[number];
function Project({ title, description, tags, imageUrl }: ProjectProps) {
    return <section>
        <h3>{title}</h3>
        <p>{description}</p>
        <ul>
            {tags.map(()tags,index)=>(
                <li key={index}></li>
            )}
        </ul>
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
