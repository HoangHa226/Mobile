import React, { useState } from "react";

export const cartContext = React.createContext();

export const CartProvider = (props) => {
    const [cart, setcart] = useState([]);
    return (
        <cartContext.Provider value={[cart,setcart]}>
            {props.children}
        </cartContext.Provider>

    )
}