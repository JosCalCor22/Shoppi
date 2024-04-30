/* Hooks */
import { useContext, useState } from 'react'

/* Components */
import { MdOutlineRemoveShoppingCart } from 'react-icons/md';
import { ShopiCartContext } from '../../../context';
import { RiSubtractFill } from 'react-icons/ri';
import { GoPlus } from 'react-icons/go';
import './styles/styles.css'

function ItemsCart ({id, title, img, price, handleDeleteItem}) {
  const [counterQuantityProducts, setCounterQuantityProducts] = useState(1);
  const context = useContext(ShopiCartContext);
  
  let totalQuantityProducts = counterQuantityProducts;

  const increaseCounter = () => {
    if(counterQuantityProducts === 10){
      alert("The maximum quantity is 10");
      setCounterQuantityProducts(10);
      context.setTotalPrice(context.totalPrice);
    } else{
      setCounterQuantityProducts(counterQuantityProducts + 1);
      context.setTotalPrice(context.totalPrice += price);
    }
  }

  const decreaseCounter = () => {
    if(counterQuantityProducts === 1){
      alert("The minimum quantity is 1");
      setCounterQuantityProducts(1);
      context.setTotalPrice(context.totalPrice);
    } else{
      setCounterQuantityProducts(counterQuantityProducts - 1);
      context.setTotalPrice(context.totalPrice -= price);
    }
  }

  return(
    <section className="section__cartItem relative w-full h-fit px-5 pt-4 pb-4">
      <figure className='section__cartItem--infoProducts gap-x-2 w-full h-fit'>
        <img className='w-[150px] h-full rounded-lg' src={img} alt={title} />
        <div className='flex h-fit flex-col text-start border-b-2 pb-1'>
          <h2 className='font-bold font-'>Product:</h2>
          <p>{title}</p>
        </div>
        <div className='flex h-fit flex-col text-start'>
          <h2 className='font-bold'>Price:</h2>
          <span>${price}</span>
        </div>
      </figure>
      <div className="flex justify-between h-fit py-4 px-4 mt-3 border-2 rounded-lg">
        <button onClick={() => increaseCounter()}>
          <GoPlus />
        </button>
        <div className="flex items-center gap-2">
          <span id='counter' >{counterQuantityProducts}</span>
        </div>
        <button onClick={() => decreaseCounter()}>
          <RiSubtractFill />
        </button>
      </div>
      <button onClick={() => handleDeleteItem(id, price, totalQuantityProducts)} className="absolute top-0 right-5 p-2 border-2 rounded-full">
        <MdOutlineRemoveShoppingCart />
      </button>
    </section>
  )
}

export { ItemsCart }