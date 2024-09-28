import React, { useEffect, useState } from "react";
import Product from "../Components/Product";
import Brand from "../Components/Brand";
import SearchBar from "../Components/SearchBar.js"

function Products() {
    const [products, setProducts] = useState([]);
    
    useEffect(()=>{
      fetch("https://fakestoreapi.com/products/")
      .then(res => res.json())
      .then(data=>setProducts(data))
      .catch(error=>console.error(error))
    }, []);
  return (
    <div>
      <Brand/>
      <SearchBar/>
      {/* <Filtering/> */}
    <div className="products-con ">
    <div className="d-flex flex-wrap m-auto">
      {
          products.map((p)=>{
              return <Product
              key={p.id}
              title={p.title}
              price={p.price}
              image={p.image}
              rating={p.rating.rate}
              id={p.id}
            />
          })
      }
  </div>
    </div>

    </div>


  );
}
export default Products;
