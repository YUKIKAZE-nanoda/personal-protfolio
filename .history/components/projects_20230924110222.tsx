"use client"
import React from 'react'
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
import Project from './project';
import { useInView } from 'react-intersection-observer';

export default function Projects() {
    const {ref,inView}=useInView();
    const {se}
    return (
        <section id='projects' className='scroll-mt-28'>
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
