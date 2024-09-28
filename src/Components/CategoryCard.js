import React from "react";

function CategoryCard(props){
    return(
        <div className="cgt-card m-2">
        <a href={props.redirect}>
          <div className="cgt-img rounded-top-4">
            <img
              src={props.img}
              alt="category-related-image"
            />
          </div>
          <div className="cgt-tag d-flex">
            <p className="h1">{props.categoryName}</p>
          </div>
          <div className="cgt-lower rounded-bottom-4"></div>
        </a>
      </div>
    );
}
export default CategoryCard;