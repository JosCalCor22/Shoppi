/* Hooks */
import { useContext } from "react";

/* Components */
import { IoCloseOutline } from "react-icons/io5";
import { FiShoppingCart } from 'react-icons/fi'
import { ShopiCartContext } from "../../context";

function AsideCart (){
  const context = useContext(ShopiCartContext);

  return (
    <aside className={`${context.closeItem ? 'flex' : 'hidden'} flex-col sticky gap-5 top-5 w-[360px] h-[600px] overflow-y-scroll border-2 border-slate-950/5 rounded-lg`}>
      <section className='flex w-full h-fit justify-between py-4 px-5'>
        <h2 className="text-xl font-semibold">Info product</h2>
        <button
          onClick={() => context.setCloseItem(false)}>
          <IoCloseOutline className="w-5 h-5"/>
        </button>
      </section>
      <section className="px-5">
        <h2 className="text-lg font-semibold mb-2">{context.showDetails.title}</h2>
        <figure className="grid gap-2">
          <img className="w-full rounded-lg" src={context.showDetails.images} alt={context.showDetails.title} />
          <figcaption className="text-sm text-justify px-2 font-slate-700">{context.showDetails.description}</figcaption>
        </figure>
        <div className="flex justify-between mt-5 mb-3 border-t-2 p-3">
          <div>
            <h2>Price: </h2>
            <p className="text-lg font-semibold">${context.showDetails.price}</p>
          </div>
          <button className="flex items-center gap-2 border-2 border-slate-950/5 px-3 py-2 rounded-lg">
            <span>Comprar</span>
            <FiShoppingCart />
          </button>
        </div>
      </section>
    </aside>
  )
}

export { AsideCart }