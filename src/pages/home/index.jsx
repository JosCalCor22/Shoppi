import { useState, useEffect } from "react"

import { Layout } from "../../components/layout/layout"
import { Cards } from "../../components/cards/cards"

function Home () {
  const [products, setproducts] = useState(null);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setproducts(data))
  }, [])

  return (
    <section className="flex justify-center text-center">
      <Layout>
        <h2>Home</h2>
        <section className="grid grid-cols-3 gap-5">
          {
            products?.map(item => (
              <Cards key={item.id} data={item} />
            ))
          }
        </section>
      </Layout>
    </section>
  )
}

export { Home }