import React, {useContext} from "react";
import { MdDelete } from "react-icons/md";
import Quantity from "./Quantity";
import CartItemsContext from "../Context/CartItemsContext";


function CartItem(props) {

  let cart = useContext(CartItemsContext);
  let { cartItems, setCartItems } = cart;

  function deleteCartItem() {
    let index = cartItems.findIndex((ele)=>ele.id===props.id);
    cartItems[index].quantity =0;
    setCartItems([...cartItems]);
  }
  
  return (
    <div className={props.quantity!==0?"d-flex c-card m-auto p-4 my-3 justify-content-between ":"d-none"}>
      <div className="d-flex">
        <div className="c-img">
          <img src={props.image} alt="product-img" />
        </div>
        <div className=" ps-2 c-pro-details ms-2">
          {props.title}
          <div className="d-flex  pt-1">
            <strong>₹{props.price * 100}</strong>
          </div>
        </div>
      </div>

      <div className="d-flex">
        <div className=" c-quantity">
          <Quantity quantity={props.quantity} id={props.id}/>
        </div>
        <div className=" c-pro-delete my-auto">
            <button className="btn" onClick={deleteCartItem}>
              <MdDelete color="red" size={25} />
            </button>
        </div>
      </div>
    </div>
  );
}
export default CartItem;
