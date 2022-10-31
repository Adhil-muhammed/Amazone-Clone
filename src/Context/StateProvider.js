import React, { useReducer, createContext } from "react";

const DispactchContext = createContext();
const StateContext = createContext();

const initialstate = {
  cartItems: [],
};
function StateProvider({ children }) {
  //   this the reducer function
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        console.log(state);
        return {
          ...state,
          cartItems: [...state.cartItems, action.Payload]
        };
      case "REMOVE_ITEM":
        console.log(action.paylod)
        const index = state.cartItems.findIndex(
          (basketItem) => basketItem.image === action.Payload
          );
        const newBasket = [...state.cartItems];
        if (index <= 0) {
          newBasket.splice(index, 1);
        } else {
          console.warn(
            `Cant remove product (id: ${action.Payload}) as its not in basket!`
          );
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
