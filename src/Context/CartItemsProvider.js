import React, { useState } from "react";
import CartItemsContext from "./CartItemsContext";

const CartItemsProvider = (props)=>{
    const [cartItems, setCartItems] = useState([]);


    return (
        <div>
            {<CartItemsContext.Provider value={{
                cartItems:cartItems,
                setCartItems:setCartItems
            }}>
                {props.children}
            </CartItemsContext.Provider>}

        </div>
    ); 
}

export default CartItemsProvider;