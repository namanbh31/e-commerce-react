import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { useContext } from "react";
import CartItemsContext from "../Context/CartItemsContext";
function Quantity(props){
    const [quantity, setQuantity] = useState(props.quantity);
    const cart = useContext(CartItemsContext);
    let{cartItems, setCartItems} = cart;
    function decrease(){
        if(quantity<=0){
            setQuantity(0);
        }
        else{
            setQuantity(quantity-1);
            let index = cartItems.findIndex((i) => i.id === props.id);
            cartItems[index].quantity-=1;
            setCartItems([...cartItems]);
        }
    }
    function increase(){
        setQuantity(quantity+1);
        let index = cartItems.findIndex((i) => i.id === props.id);
        cartItems[index].quantity+=1;
        setCartItems([...cartItems]);
    }
    return(
        <div className="px-2">
            <span>quantity: </span>

            <button className="btn">
            <CiCircleMinus onClick={decrease} className="pe-1" size={25}/>
            </button>

            {quantity}

            <button className="btn">
            <CiCirclePlus onClick={increase} className="ps-1" size={25}/>
            </button>

        </div>

    );
}

export default Quantity;