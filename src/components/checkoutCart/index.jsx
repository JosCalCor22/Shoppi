/* Hooks */
import { useContext } from 'react';
import { Link } from 'react-router-dom';

/* Components */
import { IoCloseOutline } from 'react-icons/io5'
import { ShopiCartContext } from '../../context'
import { ItemsCart } from './components/itemsCart';

function CheckoutAsideCart () {
  const context = useContext(ShopiCartContext);

  const handleDeleteItem = (id, price, quantityProducts) => {
    const itemDeleted = context.showElementCart.filter(item => item.id != id)

    context.setShowElementCart(itemDeleted);
    context.setCounter(context.counter - 1);
    console.log(quantityProducts);
    context.setTotalPrice(context.totalPrice - (price * quantityProducts));
  }

  const handleCheckout = () => {
    const orderUser = {
      id: context.myOrder.length + 1,
      date: new Date(),
      total: context.totalPrice,
      products: context.showElementCart,
      totalProducts: context.showElementCart.length,
    }

    context.setCounter(0);
    context.setTotalPrice(0);
    context.setShowElementCart([]);
    context.setCheckoutCartAside(false);
    context.setMyOrder([...context.myOrder, orderUser]);
  }

  return (
    <aside className={`${context.checkoutCartAside ? 'flex' : 'hidden'} sticky`}>
      <section className='relative flex flex-col gap-5 top-5 w-[380px] h-[600px] overflow-y-scroll border-2 border-slate-950/5 rounded-lg'>
        <div className='flex w-full h-fit justify-between py-4 px-5'>
          <h2 className="text-xl font-semibold">Checkout Product</h2>
          <button
            onClick={() => context.setCheckoutCartAside(false)}>
            <IoCloseOutline className="w-5 h-5"/>
          </button>
        </div>
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
        <div className='z-10 flex sticky bottom-0 w-full h-fit justify-between px-5 py-3 bg-white'>
          <h2 className="text-lg font-semibold">Total</h2>
          <p className="text-lg font-semibold">${context.totalPrice}</p>
          <Link to='/my-order/my-last-order'>
            <button onClick={handleCheckout}>Checkout</button>
          </Link>
        </div>
      </section>
    </aside>
  )
}

export { CheckoutAsideCart }