import React, { useReducer, createContext } from "react";

const DispactchContext = createContext();
const StateContext = createContext();

const initialstate = {
  cartItems: [],
};
function StateProvider({ children }) {
  console.log("this are my children", children);
  //   this the reducer function
  const reducer = (state, action) => {
    
    
    console.log(action);
    switch (action.type) {
      case "ADD_TO_CART":
        return {
          ...state,
          cartItems: [...state.cartItems,action.Payload],
        };

      default:
        return state;
    }
  };
  const [state, dispactch] = useReducer(reducer, initialstate);
  console.log('this is new state' , state)
  return (
    <React.Fragment>
      <DispactchContext.Provider value={dispactch}>
        <StateContext.Provider value={state}>{children}</StateContext.Provider>
      </DispactchContext.Provider>
    </React.Fragment>
  );
}

export { StateProvider, DispactchContext, StateContext };
