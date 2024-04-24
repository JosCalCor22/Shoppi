import { createContext, useState } from 'react'

const ShopiCartContext = createContext();

function ShopiCardProvider({children}){
  /* Counter state | Add to cart */
  const [counter, setCounter] = useState(0);

  /* Close item state | Details product */
  const [closeItem, setCloseItem] = useState(false);

  /* Show details products | Details */
  const [showDetails, setShowDetails] = useState({});

  return(
    <ShopiCartContext.Provider value={{
      counter, 
      setCounter,
      closeItem,
      setCloseItem,
      showDetails,
      setShowDetails
      }}>
      {children}
    </ShopiCartContext.Provider>
  )
}

export { ShopiCardProvider, ShopiCartContext }