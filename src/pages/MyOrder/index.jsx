import { useContext } from 'react'

import { ShopiCartContext } from '../../context'
import { UserOrders } from './components/orderUser'
import { Layout } from '../../components/layout/layout'

function MyOrder () {
  const context = useContext(ShopiCartContext)

  return (
    <section className="flex justify-center">
      <Layout>
        <section className="flex flex-col justify-center">
          <h2>My Orders</h2>
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
      </Layout>
    </section>
  )
}

export { MyOrder }