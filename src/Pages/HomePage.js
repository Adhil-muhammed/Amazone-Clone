import React from "react";
import Header from "../Components/Header/Header";
import Home from "../Components/Home/Home";
import Products from "../Components/Products/Products";
function HomePage() {
  return (
    <React.Fragment>
      <Header />
      <Home/>
  <Products/>
    </React.Fragment>
  );
}

export default HomePage;
