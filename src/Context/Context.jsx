
import  { createContext } from 'react';
import { useState } from 'react';
const context=createContext({ state: [], setState: () => {} });

function MyProvider({ children }) {
  const [cartItemsDetails,setCartItemsDetails]=useState([])
    return <context.Provider value={{cartItemsDetails,setCartItemsDetails}}>
      {children}
    </context.Provider>;
  }
  export { context, MyProvider }; 