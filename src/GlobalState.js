import React, { createContext, useState, useEffect } from 'react';
import ProductsAPI from './api/ProductsApi/ProductsApi';
import UserApi from './api/UserApi/UserApi';
// import CategoriesApI from './api/CategoryApi/CategoryApi';



export const GlobalState = createContext()

export const DataProvider = ({children}) =>{
    const [token, setToken] = useState(false)




 
    const state ={
        token: [token, setToken],
        productsAPI: ProductsAPI(),
        userAPI: UserApi(token),
        // categoriesAPI: CategoriesApI()
       
    }




    return(
        <GlobalState.Provider  value={state}>
            {children}
        </GlobalState.Provider>
    )
}
