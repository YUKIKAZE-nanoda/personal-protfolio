import { links } from '@/lib/data';
import React, { useState } from 'react'
type SectionName=typeof links[number]
export default function ActiveSectionContextProvider() {
    const [activeSection, setActiveSection] = useState("Home");

    return (
        <div>active-section-context</div>
    )
}
