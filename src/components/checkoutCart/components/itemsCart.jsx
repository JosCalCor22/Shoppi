/* Hooks */
import { useState } from 'react'

/* Components */
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { RiSubtractFill } from "react-icons/ri";
import { GoPlus } from "react-icons/go";
import './styles/styles.css'

function ItemsCart ({id, title, img, price, handleDeleteItem}) {
  const [counter, setCounter] = useState(1);

  const increaseCounter = () => {
    setCounter(counter + 1);
    if(counter === 10){
      alert("The maximum quantity is 10");
      setCounter(10);
    }
  }

  const decreaseCounter = () => {
    setCounter(counter - 1);
    if(counter === 1){
      alert("The minimum quantity is 1");
      setCounter(1);
    }
  }

  return(
    <section className="relative grid grid-cols-1 grid-rows-2 w-full h-fit px-5 pt-4">
      <figure className='section__cartItem grid grid-cols-2 grid-rows-2 gap-x-2 w-full h-[120px]'>
        <img className='w-[150px] h-full rounded-lg' src={img} alt={title} />
        <div className='display flex flex-col text-start'>
          <h2 className='font-bold font-'>Product:</h2>
          <p>{title}</p>
        </div>
        <div className='display flex flex-col text-start border-t-2 pt-2'>
          <h2 className='font-bold'>Price:</h2>
          <span>${price}</span>
        </div>
      </figure>
      <div className="flex justify-between h-fit py-4 px-4 mt-3 border-2 rounded-lg">
        <button onClick={() => increaseCounter()}>
          <GoPlus />
        </button>
        <div className="flex items-center gap-2">
          <span>{counter}</span>
        </div>
        <button onClick={() => decreaseCounter()}>
          <RiSubtractFill />
        </button>
      </div>
      <button onClick={() => handleDeleteItem(id)} className="absolute top-0 right-5 p-2 border-2 rounded-full">
        <MdOutlineRemoveShoppingCart />
      </button>
    </section>
  )
}

export { ItemsCart }