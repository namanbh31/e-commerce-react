import React, { useContext } from "react";
import Brand from "../Components/Brand";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CartItemsContext from "../Context/CartItemsContext";

function SingleProductPage() {
  const navigate = useNavigate();
  let cart = useContext(CartItemsContext);
  let { cartItems, setCartItems } = cart;
  let { id } = useParams();
  const [product, setProduct] = useState({});
  const [rate, setRate] = useState();
  const [rateCount, setRateCount] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products/" + id)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setRate(data.rating.rate);
        setRateCount(data.rating.count);
      })
      .catch((error) => {
        console.error(error);
        navigate("/");
      });
    setLoading(false);
  }, [id]);

  function addToCart() {
    let isPresent = cartItems.findIndex((i) => i.id === product.id);
    if (isPresent === -1) {
      product.quantity = 1;
      setCartItems([...cartItems, product]);
      toast.success("Successfully added to cart!", {
        position: "top-right",
      });
    } else {
      cartItems[isPresent].quantity+=1;
      setCartItems([...cartItems]);
      toast.success("Successfully added to cart!", {
        position: "top-right",
      });

    }
  }
  return (
    <div>
      <Brand />
      <div className="d-flex flex-wrap flex-lg-nowrap justify-content-center">
        <div className="pp-img-con mx-5">
          <img src={product.image} alt="product-image" className="" />
        </div>
        {loading ? (
          <h1>Loading</h1>
        ) : (
          <div className="pp-details mx-3 mb-5">
            <div className="">
              <h1>{product.title}</h1>
            </div>
            <div className="text-secondary">
              <h6>
                Rating {rate}/5 ({rateCount} customer review)
              </h6>
            </div>
            <div className="alert alert-dark" role="alert">
              {product.category}
            </div>
            <div className="text-secondary">
              <h6>{product.description}</h6>
            </div>
            <div>
              <h3>₹ {product.price * 100}</h3>
            </div>
            <div>
              <button className="btn btn-dark" onClick={addToCart}>
                {" "}
                Add to Cart
              </button>
              <Link to="/cart">
                <button
                  className="btn btn-dark ms-4"
                >
                  Goto Cart
                </button>
              </Link>
              <ToastContainer />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default SingleProductPage;
