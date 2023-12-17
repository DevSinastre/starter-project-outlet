import { createContext, useState } from "react";

export const themes = {
    light: {
        color: 'black',
        backgroundColor: 'white',
        background: '#ccc',
        transition: '.4s ease-in-out',
        left: '0'
    },
    dark: {
        color: 'white',
        backgroundColor: 'black',
        background: '#222',
        transition: '.4s ease-in-out',
        left: '21px'
    }
}

export const ThemeContext = createContext({});

export const ThemeProvider = (props) => {
    const [theme, setTheme] = useState(themes.light);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}   