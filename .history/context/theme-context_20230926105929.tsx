import React, { useEffect, useState } from 'react'
import { createContext } from 'vm';
type Theme = "light" | "dark"
type ThemeContextProviderProps={
    chidren:React.ReactNode;
}
type ThemeContextType={
    theme:Theme;
    toggleThe
}
const ThemeContext=createContext(null);
export default function ThemeContextProvider({
    children
}:ThemeContextProviderProps) {
    const [theme, setTheme] = useState<Theme>("light");
    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
            window.localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark")
        } else {
            setTheme("light");
            window.localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark")
        }
    }

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme') as Theme | null;
        if (localTheme) {
            setTheme(localTheme);
            if (localTheme === "dark") {
                document.documentElement.classList.add("dark");
            }
        } else if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
            setTheme("dark");
            document.documentElement.classList.add("dark")
        }
    }, []);
    return <ThemeContext.Provider value={{
        theme,
        toggleTheme
    }}>
        {children}
    </ThemeContext.Provider>
}
