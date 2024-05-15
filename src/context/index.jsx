import { createContext, useState } from 'react'

const ShopiCartContext = createContext();
const URLAPI = 'https://dummyjson.com/products/';

function ShopiCardProvider({children}){
  /* Counter state for aside element where I do the checkout products | Add to cart */
  const [counter, setCounter] = useState(0);

  /* Show all products at home */
  const [catalogue, setCatalogue] = useState([]);

  /* Show total prize of objetcs */
  const [totalPrice, setTotalPrice] = useState(0);

  /* Close aside information | Details product */
  const [closeItem, setCloseItem] = useState(false);

  /* Show checkout aside when the condition is true | See items in cart */
  const [checkoutCartAside, setCheckoutCartAside] = useState(false);

  /* Products in section MyOrder */
  const [myOrder, setMyOrder] = useState([]);

  /* Show details products in an aside bar when I click the image | Details */
  const [showDetails, setShowDetails] = useState({});

  /* Show aside element with checkout products | Add */
  const [showElementCart, setShowElementCart] = useState([]);

  return(
    <ShopiCartContext.Provider value={{
      counter, 
      setCounter,
      totalPrice,
      setTotalPrice,
      catalogue,
      setCatalogue,
      closeItem,
      setCloseItem,
      showDetails,
      setShowDetails,
      showElementCart,
      setShowElementCart,
      checkoutCartAside,
      setCheckoutCartAside,
      myOrder,
      setMyOrder
      }}>
      {children}
    </ShopiCartContext.Provider>
  )
}

export { ShopiCardProvider, ShopiCartContext, URLAPI }