// products context

import React,{useState} from 'react';

export const ProductContext = React.createContext();
//Provider, Consumer and useContext()

export default function ProductProvider({children}) {
   // const greeting = "ellooo"
   const[loading,setLoading] = React.useState(false)
   const[products, setproducts] = React.useState([]);
   const[featured,  setFeatured] = React.useState([])
    return (
        <ProductContext.Provider value={{loading,products,featured}}>
            {children}
        </ProductContext.Provider>
    )
}
