import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router"

import localeTextMap from 'constants/locales'

const LocaleContext = createContext({
    locale: '',
    text: {},
})

export const useLocale = () => {
    return useContext(LocaleContext)
}

export const LocaleProvider = ({ localization, children }) => {

    const { locale } = useRouter();

    const [context, setContext] = useState({
        locale: '',
        text: {},
    })

    // TODO: Add effect hook to store locale in local storage

    useEffect(() => {
        setContext({
            locale: localization.locale,
            text: localization.text
        })
    },[locale])

    return (
        <LocaleContext.Provider value={context}>
            { children }
        </LocaleContext.Provider>
    )
}

export function getLocalizationProps(locale) {
    return {
        locale: locale,
        text: localeTextMap[locale]
    }
}


