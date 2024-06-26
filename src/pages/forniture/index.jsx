/* Hooks */
import { useEffect, useContext } from 'react'

/* Components */
import { ShopiCartContext, URLAPI } from '../../context'
import { Cards } from '../../components/cards/cards'
import { AsideCart } from '../../components/asideCart'
import { Layout } from '../../components/layout/layout'
import { CheckoutAsideCart } from '../../components/checkoutCart'

function ForniturePage () {
  const context = useContext(ShopiCartContext);

  useEffect(() => {
    fetch(`${URLAPI}/category/home-decoration`)
      .then(response => response.json())
      .then(data => context.setCatalogue(data?.products))
  }, [])

  return(
    <section className='flex justify-center text-center mb-4'>
      <Layout>
        <section className='flex flex-col items-center'>
          <h2 className='text-3xl w-full font-bold my-4 pb-1 mb-5 border-b-2 border-dotted border-[#351e1a]'>Furniture</h2>
          <section className='grid grid-cols-3 gap-5 px-3'>
            {
              context.catalogue?.map(item => (
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

export { ForniturePage }