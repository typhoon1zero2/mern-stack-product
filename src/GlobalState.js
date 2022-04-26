import React, {createContext, useState, useEffect} from 'react';
import ProductsAPI from './api/ProductsApi/ProductsApi'


export const GlobalState = createContext()

export const DataProvider = ({children}) =>{

    ProductsAPI()
    return(
        <GlobalState.Provider  value={"Value in global"}>
            {children}
        </GlobalState.Provider>
    )
}
