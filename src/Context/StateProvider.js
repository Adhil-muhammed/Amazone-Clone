import React, { useReducer, createContext } from "react";

const DispactchContext = createContext();
const StateContext = createContext();

const initialstate = {
  cartItems: [],
};
function StateProvider({ children }) {
  //   this the reducer function
  const reducer = (state, action) => {
    console.log(state);
    switch (action.type) {
      case "ADD_TO_CART":
        return {
          ...state,
          cartItems: [...state.cartItems, action.Payload],
        };
      case "REMOVE_ITEM":
        const index = state.cartItems.findIndex(
          (basketItem) => basketItem.id === action.Payload
        );
        console.log("action.Payload", action.Payload);
        console.log("index", index);
      const newBasket = [...state.cartItems];
        console.log("newBasket", newBasket);
        if (index === 0) {
          newBasket.splice(index, 1);
          // console.log(
          //   "newBasket.splice(index, 1);",
          //   newBasket.splice(index, 1)
          // );
        } else {
          console.log("oops");
        }
        return {
          ...state,
          cartItems: newBasket,
        };

      default:
        return state;
    }
  };
  const [state, dispactch] = useReducer(reducer, initialstate);

  return (
    <React.Fragment>
      <DispactchContext.Provider value={dispactch}>
        <StateContext.Provider value={state}>{children}</StateContext.Provider>
      </DispactchContext.Provider>
    </React.Fragment>
  );
}

export { StateProvider, DispactchContext, StateContext };
