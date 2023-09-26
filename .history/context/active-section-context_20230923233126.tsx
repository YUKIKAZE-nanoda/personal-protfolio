import { links } from '@/lib/data';
import React, { useState } from 'react'
type SectionName = (typeof links)[number]["name"]
export default function ActiveSectionContextProvider({
    children,
}) {
    const [activeSection, setActiveSection] = useState("Home");

    return children
}
