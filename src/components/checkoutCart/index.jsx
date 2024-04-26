/* Hooks */
import { useContext } from 'react';

/* Components */
import { IoCloseOutline } from 'react-icons/io5'
import { ShopiCartContext } from '../../context'
import { ItemsCart } from './components/itemsCart';

function CheckoutAsideCart () {
  const context = useContext(ShopiCartContext);

  const handleDeleteItem = (id) => {
    const itemDeleted = context.showElementCart.filter(item => item.id != id)

    context.setShowElementCart(itemDeleted);
    context.setCounter(context.counter - 1);
  }

  return (
    <aside className={`${context.CheckoutAsideCart ? 'flex' : 'hidden'}flex-col sticky gap-5 top-5 w-[380px] h-[600px] overflow-y-scroll border-2 border-slate-950/5 rounded-lg`}>
      <section className='flex w-full h-fit justify-between py-4 px-5'>
        <h2 className="text-xl font-semibold">Checkout Product</h2>
        <button
          onClick={() => context.setCheckoutCartAside(false)}>
          <IoCloseOutline className="w-5 h-5"/>
        </button>
      </section>
      {
        context.showElementCart?.map((item) => (
          <ItemsCart 
            key={item.id} 
            id={item.id} 
            title={item.title} 
            img={item.images[0]} 
            price={item.price}
            handleDeleteItem={handleDeleteItem} />
        ))
      }
    </aside>
  )
}

export { CheckoutAsideCart }