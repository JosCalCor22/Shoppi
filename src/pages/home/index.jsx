/* Hooks */
import { useState, useEffect, useContext } from 'react'

/* Components */
import { ShopiCartContext } from '../../context'
import { Cards } from '../../components/cards/cards'
import { AsideCart } from '../../components/asideCart'
import { Layout } from '../../components/layout/layout'
import { CheckoutAsideCart } from '../../components/checkoutCart'

function Home () {
  const [catalogue, setCatalogue] = useState([]);
  const context = useContext(ShopiCartContext);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => setCatalogue(data?.products))
  }, [])

  return (
    <section className='flex justify-center text-center'>
      <Layout>
        <section className='flex flex-col items-center'>
          <h2 className='text-3xl w-fit font-semibold my-4 pb-1 px-3 border-b-2'>Home</h2>
          <section className='grid grid-cols-3 gap-5'>
            {
              catalogue?.map(item => (
                <Cards key={item.id} data={item} />
              ))
            }
          </section>
        </section>
        {
          context.closeItem && !context.CheckoutAsideCart ? (
            <AsideCart />
          ) : null
        }{
          context.checkoutCartAside && !context.closeItem ? (
            <CheckoutAsideCart />
          ) : null
        }
      </Layout>
    </section>
  )
}

export { Home }