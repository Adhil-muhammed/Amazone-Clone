import React from "react";
import "./Products.css";
function Products({ id, title, price, rating, image }) {
  // var imge
  return (
    <React.Fragment>
      <div key={id}>

      <div className="product"  >
        <div className="product__info">
          <p>{title}</p>
          <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
             <span>  <p>🌟</p></span> 
              ))}
          </div>
        </div>

        <img src={image} alt="" />

        <button>Add to Basket</button>
      </div>
      </div>
    </React.Fragment>
  );
}

export default Products;
