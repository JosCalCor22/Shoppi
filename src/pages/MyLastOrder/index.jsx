import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { ShopiCartContext } from '../../context'
import { IoIosArrowForward } from 'react-icons/io';
import { Layout } from '../../components/layout/layout'
import { ItemsCart } from '../../components/checkoutCart/components/itemsCart'

function MyLastOrder () {
  const context = useContext(ShopiCartContext);

  return (
    <Layout>
      <main className='items-center flex flex-col w-full'>
        <section className='justify-center items-center flex w-[400px] gap-5 mx-auto my-5 pb-4 border-b-2 border-dotted border-[#351e1a]'>
          <div className='items-center flex gap-5'>
            <div className='rotate-180 py-3 px-2 border-2 border-[#351e1a] rounded-full'>
              <Link 
                to={'/my-order'}>
                <IoIosArrowForward className='w-5 h-5' />
              </Link>
            </div>
            <h2 className='text-3xl w-full font-bold'>My last order</h2>
          </div>
        </section>
        <section className='w-fit'>
          {
            context.myOrder?.slice(-1)?.[0]?.products?.map((item) => (
              <ItemsCart 
                key={item.id} 
                id={item.id} 
                title={item.title} 
                img={item.images[0]} 
                price={item.price} />
            ))
          }
        </section>
      </main>
    </Layout>
  )
}

export { MyLastOrder }