import { useContext } from 'react'

import { ShopiCartContext } from '../../context'
import { UserOrders } from './components/orderUser'
import { Layout } from '../../components/layout/layout'

function MyOrder () {
  const context = useContext(ShopiCartContext)

  return (
    <Layout>
      <section className='flex flex-col gap-5 my-0 mx-auto'>
        <div className="flex flex-col justify-center w-[400px] mx-auto my-5 pb-4 border-b-2 border-dotted border-[#351e1a]">
          <h2 className='text-3xl w-full font-bold text-center'>My Orders</h2>
        </div>
        <section className='flex flex-col gap-5'>
        {
          context.myOrder?.map((order, index) => (
            <UserOrders 
              key={index} 
              id={order.id}
              priceProducts={order.total}
              quantityProducts={order.totalProducts}
            />
          ))
        }
        </section>
      </section>
    </Layout>
  )
}

export { MyOrder }