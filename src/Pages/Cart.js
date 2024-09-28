import React, { useContext, useState } from "react";
import CartItem from "../Components/CartItem";
import Brand from "../Components/Brand";
import { Link } from "react-router-dom";
import CartItemsContext from "../Context/CartItemsContext";
function Cart() {

  let cart = useContext(CartItemsContext);
  let { cartItems, setCartItems } = cart;
  function totalAmount(){
    let totalAmount = cartItems.reduce((amt, ele)=> amt+ele.quantity*ele.price*100, 0);
    return totalAmount;
  }
  return (
    <div className="">
      <Brand />
      <h1 className="text-center">Cart</h1>
      {totalAmount() <= 0 ? (
        <h1 className="text-center text-secondary">Cart is empty</h1>
      ) : (
        cartItems.map((p) => {
          return (
            <CartItem
              key={p.id}
              id={p.id}
              title={p.title}
              image={p.image}
              price={p.price}
              quantity={p.quantity}
            />
          );
        })
      )}
      <div className="d-flex justify-content-end place-order-btn"> 
        <strong>Total Amount = {totalAmount()}</strong> 
      </div>
      <div className="d-flex justify-content-end place-order-btn mb-5">
        {totalAmount()<=0?null:(<Link to="/order">
          <button className="btn btn-dark">Place Order</button>
        </Link>)}
      </div>
    </div>
  );
}
export default Cart;
