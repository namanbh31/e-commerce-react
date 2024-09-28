import React from "react";
import { Link } from "react-router-dom";
function Product(props){

    return (
        <div className="p-card text-center shadow-md rounded-4 mx-auto my-3">
            <Link to={"/product/"+props.id}>
            <div className="p-card-img rounded-3 pb-2 d-flex align-items-center justify-content-center">
                <img src={props.image} alt="product-image" />
            </div>
            <div className="p-details">
                <p className="p-title text-align-justify red-hat-text px-3 text-weight-heavier">
                    {(props.title.length<27)?props.title:props.title.substring(0, 27)+"..."}
                </p>
                <p className="p-rating text-secondary text-align-justify px-3 text-weight-lighter">
                    rating - {props.rating}/5
                </p>
                <p className="p-price text-align-justify px-3 text-weight-heavier">
                    ₹ {props.price*100}
                </p>
            </div>
        </Link>
        </div>
    );
}
export default Product;