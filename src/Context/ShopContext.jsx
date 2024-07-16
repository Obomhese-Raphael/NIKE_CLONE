/* eslint-disable react/prop-types */
import { createContext } from "react";
import all_product from "../Components/assets/all_product"
import roll_products from "../Components/assets/roll_product";

export const ShopContext = createContext(null)

const ShopContextProvider = (props) => {
    const contextValue = { all_product, roll_products }

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider
