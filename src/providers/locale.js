import React, { createContext, useContext, useEffect, useState } from "react";

import { DEFAULT_LANGUAGE } from 'constants/defaults'

const LocaleContext = createContext({
    language: '',
    text: {},
    onLocaleChange: () => {}
})

export const useLocale= () => {
    return useContext(LocaleContext)
}

export const LocaleProvider = ({ children }) => {

    const [language, setLanguage] = useState('en')
    const [context, setContext] = useState({
        language: 'en',
        text: '',
        onLocaleChange: (newLang) => {
            setLanguage(newLang)
        }
    })

    useEffect(() => {
        setLanguage(DEFAULT_LANGUAGE)
    }, [])

    useEffect(() => {
        const newLang = language;
        //TODO: fetch the text associated to the new language
        setContext({ ...context,
            language: newLang,
            text: { msg: 'Your Language is: ' + newLang }
        });
    }, [language]);


    return (
        <LocaleContext.Provider value={context}>
            { children }
        </LocaleContext.Provider>
    )
}


