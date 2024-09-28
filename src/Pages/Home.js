import React from "react";
import Brand from '../Components/Brand.js';
import SearchBar from '../Components/SearchBar.js';
import Category from '../Components/Category.js';
import { useNavigate } from "react-router-dom";
function Home() {
  return (
    <div>
      <Brand />
      <SearchBar />
      <Category />
    </div>
  );
}
export default Home;
