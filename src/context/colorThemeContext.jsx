import { useState, createContext, useContext, useEffect } from "react";

const ColorThemeContext = createContext();
const isUserPreferDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
).matches;

function ColorThemeProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(isUserPreferDark);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark-mode");
        } else {
            document.documentElement.classList.remove("dark-mode");
        }
    }, [isDarkMode]);

    function toggleDarkMode() {
        setIsDarkMode((isDark) => !isDark);
    }

    return (
        <ColorThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </ColorThemeContext.Provider>
    );
}

function useColorTheme() {
    const context = useContext(ColorThemeContext);

    if (context === undefined)
        throw new Error("useColorTheme is using outside ColorThemeProvider");
    return context;
}

export { ColorThemeProvider, useColorTheme };
