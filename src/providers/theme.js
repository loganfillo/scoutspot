import React, { createContext, useContext, useEffect, useState } from "react";
import { MuiThemeProvider } from '@material-ui/core/styles'

import { DEFAULT_THEME } from 'constants/defaults'
import lightTheme from 'constants/themes/light'
import darkTheme from 'constants/themes/dark'

const ThemeContext = createContext({
    theme: {},
    onThemeChange: () => { }
})

export const useTheme = () => {
    return useContext(ThemeContext)
}

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState(DEFAULT_THEME)
    const [context, setContext] = useState({
        theme: {},
        onThemeChange: (newTheme) => {
            console.log(newTheme)
            if (newTheme === 'DARK') {
                setTheme(darkTheme)
            } else if (newTheme === 'LIGHT') {
                setTheme(lightTheme)
            } else {
                console.log('Invalid theme value, must be one of [DARK, LIGHT]')
            }
        }
    })

    useState(() => {
        const newTheme = theme
        setContext({...context, theme: newTheme})
    }, [theme])

    return (
        <ThemeContext.Provider  value={context}>
            <MuiThemeProvider theme={theme}>
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    )
}


