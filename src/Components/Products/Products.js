import React, { useContext } from "react";
import { DispactchContext } from "../../Context/StateProvider";
import "./Products.css";
function Products({ id, title, price, rating, image }) {
  const dispactch = useContext(DispactchContext);
  const AddBasket = () => {
   
    dispactch({
      type: "ADD_TO_CART",
      Payload: {
        Id: id,
        Tittle: title,
        Price: price,
        Images: image,
        Rating: rating,
      },
    });
  };

  return (
    <React.Fragment>
      <div key={id}>
        <div className="product">
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
                  <span>
                    {" "}
                    <p>🌟</p>
                  </span>
                ))}
            </div>
          </div>

          <img src={image} alt="" />

          <button onClick={AddBasket}>Add to Basket</button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Products;
