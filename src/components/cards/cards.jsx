/* Hooks */
import { useContext } from 'react'

/* Components */
import { IoCheckmarkOutline } from 'react-icons/io5'
import { ShopiCartContext } from '../../context'
import { FiPlus } from 'react-icons/fi'

function Cards ({data}){
  const context = useContext(ShopiCartContext);

  const showDetailsProduct = (detailsObject) => {
    context.setCloseItem(true);
    context.setCheckoutCartAside(false);
    context.setShowDetails(detailsObject);
  }

  const addElementToCart = (objectElement) => {
    context.setCloseItem(false);
    context.setCheckoutCartAside(true);
    context.setCounter(context.counter + 1);
    context.setTotalPrice(context.totalPrice + objectElement.price);
    context.setShowElementCart([...context.showElementCart, objectElement]);
  }

  const noRepeatItemInCart = (object) => {
    const isInCart = context.showElementCart.filter(item => item.id === object.id).length > 0
    
    if(isInCart){
      return(
        <button 
          className='absolute top-[10px] right-[10px] p-1 text-white rounded-full cursor-pointer bg-[#aa6558]'>
          <IoCheckmarkOutline />
        </button>
      )
    } else{
      return(
        <button 
          onClick={() => addElementToCart(object)}
          className='absolute top-[10px] right-[10px] p-1 text-white rounded-full cursor-pointer bg-[#aa6558]'>
          <FiPlus />
        </button>
      )
    }
  }

  return(
    <div className='h-fit w-[270px] flex flex-col justify-between bg-[#d3a096] border-2 border-[#351e1a] rounded-lg'>
      <figure className='w-full h-[85%] relative'>
        {noRepeatItemInCart(data)}
        <img 
          onClick={() => showDetailsProduct(data)}
          className='w-full h-[245px] object-cover rounded-b-none rounded-lg'
          src={data.images[0]} 
          alt={data.title} />
        <span className='absolute bottom-[10px] left-[10px] text-white font-bold p-2 rounded-lg cursor-pointer bg-[#d3a09680]'>{data.category}</span>
      </figure>
      <div className='flex h-[60px] justify-between p-2 rounded-b-lg'>
        <p className='text-base flex items-center w-[200px] text-left'>{data.title}</p>
        <span className='flex items-center text-lg font-bold'>${data.price}</span>
      </div>
    </div>
  )
}

export { Cards }