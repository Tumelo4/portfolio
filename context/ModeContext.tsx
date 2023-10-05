'use client'
import React, { useContext, ReactNode, useState, createContext, useEffect } from "react";

interface ModeProviderProps {
    children: ReactNode
}

interface ModeContextProps {
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>,
    isDarkMode: boolean
}

const ModeContext = createContext({} as ModeContextProps);

export const useMode = () => {
    return useContext(ModeContext)
}

export const ModeProvider = ({ children }: ModeProviderProps) => {
    const [isDarkMode, setDarkMode] = useState<boolean>(() => false);

    useEffect(() => {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (systemTheme) {
        setDarkMode(prevTheme => !prevTheme);
      }
    }, [])
    

    
    return (
        <ModeContext.Provider
            value={{
                isDarkMode,
                setDarkMode
            }}
        >
            {children}
        </ModeContext.Provider>
    )
}