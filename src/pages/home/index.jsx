/* Hooks */
import { useState, useEffect } from 'react'

/* Components */
import { Layout } from '../../components/layout/layout'
import { AsideCart } from '../../components/asideCart'
import { Cards } from '../../components/cards/cards'

function Home () {
  const [products, setproducts] = useState(null);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setproducts(data))
  }, [])

  return (
    <section className='flex justify-center text-center'>
      <Layout>
        <section className='flex flex-col items-center'>
          <h2 className='text-3xl w-fit font-semibold my-4 pb-1 px-3 border-b-2'>Home</h2>
          <section className='grid grid-cols-3 gap-5'>
            {
              products?.map(item => (
                <Cards key={item.id} data={item} />
              ))
            }
          </section>
        </section>
        <AsideCart />
      </Layout>
    </section>
  )
}

export { Home }