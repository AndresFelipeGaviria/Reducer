import React, { createContext, useContext, useReducer } from "react";


export const DataContext = createContext();

export const DataProvider = ({reducer, initialState, children }) => (
        <DataContext.Provider value={useReducer( reducer, initialState)}>
            {children}
        </DataContext.Provider>
)

export const useStateValue = () => useContext(DataContext);