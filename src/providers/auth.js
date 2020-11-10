import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({
    token: ''
})

export const useAuth= () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {

    const [context, setContext] = useState({
        token:''
    })

    useEffect(() => {
        //TODO: fetch the text associated to the new language
        setContext({ ...context,
        });
    }, ["//TODO"]);


    return (
        <AuthContext.Provider value={context}>
            { children }
        </AuthContext.Provider>
    )
}


