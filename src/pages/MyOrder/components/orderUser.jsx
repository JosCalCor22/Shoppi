import { Link } from 'react-router-dom'

import { IoIosArrowForward } from 'react-icons/io';

function UserOrders ({id, quantityProducts, priceProducts}) {
  return(
    <section>
      <div>
        <h2>Order number {id}</h2>
        <p>Quantity: {quantityProducts}</p>
        <p>Total: ${priceProducts}</p>
      </div>
      <div>
        <Link to={`/my-order/my-last-order/${id}`}>
          <IoIosArrowForward />
        </Link>
      </div>
    </section>
  )
}

export { UserOrders }