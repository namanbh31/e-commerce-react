import React, { useState, useContext } from "react";
import Brand from "../Components/Brand";
import { useNavigate } from "react-router-dom";
import CartItemsContext from "../Context/CartItemsContext.js";
import { toast, ToastContainer } from "react-toastify";
import { validate } from "email-validator";
function OrderPlacement() {
  let cart = useContext(CartItemsContext);
  let { setCartItems } = cart;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [add1, setAdd1] = useState("");
  const [add2, setAdd2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState(0);
  let navigator = useNavigate();
  function clearCart() {
    setCartItems([]);
  }
  function orderSuccessfull() {
    clearCart();
    navigator("/success");
  }
  function formVerification(event) {
    let isValidated = true;
    event.preventDefault();
    if (name.length === 0) {
      isValidated = false;
      toast.warning("Please enter a valid name", {
        position: "top-right",
      });
    }
    if (phone < 1000000000) {
      isValidated = false;
      toast.warning("Please enter a valid phone number", {
        position: "top-right",
      });
    }
    if(add1.length===0 || add2.length===0){
      isValidated = false;
      toast.warning("Please enter a valid address", {
        position: "top-right",
      });
    }
    if(city.length===0){
      isValidated = false;
      toast.warning("Please enter a valid city", {
        position: "top-right",
      });
    }
    if(state.length===0){
      isValidated = false;
      toast.warning("Please enter a valid state", {
        position: "top-right",
      });
    }
    if(pincode<10000){
      isValidated = false;
      toast.warning("Please enter a valid pincode", {
        position: "top-right",
      });
    }
    if(!validate(email)){
      isValidated = false;
      toast.warning("Please enter a valid emial", {
        position: "top-right",
      });
    }
    if(isValidated){
      orderSuccessfull();
    }
  }
  return (
    <div>
      <Brand />
      <div className="order-form mx-auto p-3 rounded-4 my-5">
        <h1 className="text-center">Place Order</h1>
        <form className="" onSubmit={(event) => formVerification(event)}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="form-control"
              placeholder="Email"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input
              type="number"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              className="form-control"
              placeholder="Phone Number"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Address</label>
            <input
              value={add1}
              onChange={(event) => setAdd1(event.target.value)}
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Address lane 1"
            />
            <input
              value={add2}
              onChange={(event) => setAdd2(event.target.value)}
              type="text"
              className="form-control mt-4"
              placeholder="Address lane 2"
            />
          </div>
          <div className="row g-3">
            <div className="mb-3 col-md-6">
              <label className="form-label">City</label>
              <input
                type="text"
                className="form-control"
                placeholder="City"
                value={city}
                onChange={(event) => setCity(event.target.value)}
              />
            </div>
            <div className="mb-3 col-md-6">
              <label className="form-label">State</label>
              <input
                value={state}
                onChange={(event) => setState(event.target.value)}
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="State"
              />
            </div>
            <div className="mb-3 col-md-6 mx-auto">
              <label className="form-label">Pincode</label>
              <input
                value={pincode}
                onChange={(event) => setPincode(event.target.value)}
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Pincode"
              />
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button className="btn btn-dark " type="submit">
              Place Order
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}
export default OrderPlacement;
