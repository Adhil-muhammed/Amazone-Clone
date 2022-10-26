import React from "react";

function Products() {
  return (
    <React.Fragment>
      <div className="products_cards">
        <div className="product_infoTittle">
          <h3>Revamp your home in </h3>
          <p>
            <h1>style</h1>{" "}
          </p>
        </div>
        <div className="products_images">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_1_Low._SY116_CB670263840_.jpg"
            alt=""
          />
          <a href="">
            <h6>Explore all</h6>
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Products;
