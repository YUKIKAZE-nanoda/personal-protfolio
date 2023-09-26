import React from 'react'
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';

export default function Projects() {
    return (
        <section>
            <SectionHeading>My Projects</SectionHeading>
            <div>
                {
                    projectsData.map()
                }
            </div>
        </section>
    );
}
