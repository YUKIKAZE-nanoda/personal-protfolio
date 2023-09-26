import { links } from '@/lib/data';
import React, { useState } from 'react'
import { createContext } from 'vm';
type SectionName = (typeof links)[number]["name"]
type ActiveSectionContextProviderProps = {
    children: React.ReactNode;
};

const ActiveSectionContext = createContext();
export default function ActiveSectionContextProvider({
    children,
}: ActiveSectionContextProviderProps
) {
    const [activeSection, setActiveSection] = useState("Home");

    return <ActiveSectionContext.Provider>
        {}
    </ActiveSectionContext.Provider>
}
