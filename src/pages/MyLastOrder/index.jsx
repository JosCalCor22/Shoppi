import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { ShopiCartContext } from '../../context'
import { IoIosArrowForward } from 'react-icons/io';
import { Layout } from '../../components/layout/layout'
import { ItemsCart } from '../../components/checkoutCart/components/itemsCart'

function MyLastOrder () {
  const context = useContext(ShopiCartContext);

  return (
    <section className="flex justify-center">
      <Layout>
        <div>
          <h2>My Order</h2>
        </div>
        <div>
          <Link to={'/my-order'}>
            <IoIosArrowForward />
          </Link>
        </div>
        <section>
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
      </Layout>
    </section>
  )
}

export { MyLastOrder }