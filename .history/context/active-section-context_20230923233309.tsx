import { links } from '@/lib/data';
import { type } from 'os';
import React, { useState } from 'react'
type SectionName = (typeof links)[number]["name"]
type ActiveSectionContextProviderProps={
    children:
}
export default function ActiveSectionContextProvider({
    children,
}:{
    ActiveSectionContextProviderProps
}) {
    const [activeSection, setActiveSection] = useState("Home");

    return children
}
