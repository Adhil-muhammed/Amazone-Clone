import React, { useContext } from "react";

import { StateContext, DispactchContext } from "../../Context/StateProvider";
import "./AddToCart.css";
function AddToCart() {
  const CartPackage = useContext(StateContext);
  const dispacth = useContext(DispactchContext);
  console.log(CartPackage);
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
            {/* shopping  */}
            {Object.keys(CartPackage.cartItems).length !== 0 ? (
              <h2 className="checkout__title">Your shopping Basket</h2>
            ) : (
              <h2>your Shopping Cart empty</h2>
            )}
       
            <div>
              {CartPackage.cartItems.map((obj) => (
                <div key={obj.Id}>
                  <div className="Cartimage">
                    <img src={obj.Images} alt="" />
                  </div>
                  <div className="Cart_tittle">
                    <h3 className="heading_tittle">{obj.Tittle}</h3>
                  </div>
                  <button
                    onClick={() => {
                      dispacth({
                        type: "REMOVE_ITEM",
                        paylod: {
                          // id: obj.Id,
                          image: obj.Images,
                        },
                      });
                    }}
                  >
                    Remove Item{" "}
                  </button>
                </div>
              ))}

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
      </div>
    </React.Fragment>
  );
}

export default AddToCart;
