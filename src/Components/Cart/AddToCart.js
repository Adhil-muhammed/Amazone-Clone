import React, { useContext } from "react";

import { StateContext } from "../../Context/StateProvider";
import "./AddToCart";
function AddToCart() {
  const CartPackage = useContext(StateContext);
  console.log("this is CartItem ", CartPackage);
  const Products = CartPackage.cartItems.map((obj) => {
    return (
      <div key={obj.Id}>
        <img className="crat_image" src={obj.Images} alt="" />
        <div>
          <h3 className="Crat_heading">{obj.Tittle}</h3>
        </div>
      </div>
    );
  });

  return (
    <React.Fragment>
      <div className="checkout">
        <div className="checkout__left">
          <img
            className="checkout__ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
          />

          <div>
            <h3>
              Hello,
              {/* {user?.email} */}
            </h3>
            <h2 className="checkout__title">Your shopping Basket</h2>
            <div className="crat_image" >{Products}</div>

            {/* {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))} */}
          </div>
        </div>

        <div className="checkout__right">{/* <Subtotal /> */}</div>
      </div>
    </React.Fragment>
  );
}

export default AddToCart;
