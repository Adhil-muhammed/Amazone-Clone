import React, { useReducer,createContext } from "react";

 const DispactchContext=createContext()
 const StateContext=createContext()








function StateProvider({children}) {
    console.log("this are my children",children);
    const initialstate={
        cartItems:[]
    }
  //   this the reducer function
  const reducer = (state, action) => {
    // switch (action) {
    //   case value: //action needed

    //   default:

    //     return state;
    // }
  };
  const [state, dispactch] = useReducer(reducer, initialstate);

  return (
  <React.Fragment>
    <DispactchContext.Provider value={dispactch}>
        <StateContext.Provider value={state}>
{children}
        </StateContext.Provider>
    </DispactchContext.Provider>
  </React.Fragment>
  )
}

export { StateProvider,DispactchContext,StateContext}
