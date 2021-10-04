import React, { createContext, useContext, useState } from "react";



    const StateContext = createContext();


    export  const StateProvider = ({ children }) => {

        const [state, setState] = useState({})

        const setValues = (values) => {
            setState(prevData => ({
                ...prevData,
                ...values
            }))
        }


        return<StateContext.Provider value = { state, setValues }>{children}</StateContext.Provider>;
    }

    export const useStates = () => useContext(StateContext);


    