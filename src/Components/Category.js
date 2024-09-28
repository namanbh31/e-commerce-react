import React from "react";
import CategoryCard from "./CategoryCard";

function Category() {
  return (
    <div className="d-flex justify-content-around flex-wrap">
      <CategoryCard
        img="https://img.freepik.com/free-photo/man-posing-while-smiling_23-2148372317.jpg?w=1060&t=st=1726939402~exp=1726940002~hmac=975f5d0f6cee64e0ea8f81ac91a740b186e42b409c54f455ce0e44760bfdfe23"
        categoryName="Men's"
        redirect="/products"
      />
      <CategoryCard
        img="https://img.freepik.com/free-photo/stylish-young-woman-standing-front-iron-shutter-looking-shoulder-removing-jacket_23-2148148122.jpg?t=st=1726940963~exp=1726944563~hmac=15e7175fc3f0d6fa469820add807c2ae886b8c82b76e03ddd2fad1d7fbd316e4&w=1380"
        categoryName="Womens"
        redirect="/products"
      />
      <CategoryCard
        img="https://img.freepik.com/free-photo/portrait-pretty-girl-holding-retro-instant-camera-hands-against-blue-background_23-2148040067.jpg?t=st=1726941035~exp=1726944635~hmac=d88a627e9a9a607d8f2a590381eabbefe617f60f0285acb36ed88741da5f5907&w=1060"
        categoryName="Children"
        redirect="/products"
      />
    </div>
  );
}
export default Category;
