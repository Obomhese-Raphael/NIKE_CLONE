/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import all_product from "../Components/assets/all_product";
import new_collections from "../Components/assets/new_collections.js"

export const ShopContext = createContext({new_collections})

const ShopContextProvider = (props) => {    
    const [ cart, setCart ] = useState([])
    const contextValue = {all_product, new_collections, cart, setCart}
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default { ShopContextProvider} 
