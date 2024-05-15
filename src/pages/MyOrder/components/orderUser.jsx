import { Link } from 'react-router-dom'

import { IoIosArrowForward } from 'react-icons/io';

function UserOrders ({id, quantityProducts, priceProducts}) {
  return(
    <section className='flex justify-between p-4 gap-5 border-2 border-[#351e1a] rounded-lg'>
      <div className='w-[300px]'>
        <p className='flex font-bold text-xl gap-2'>Order number: <span className='font-normal'>{id}</span></p>
        <p className='flex font-bold text-xl gap-2'>Total: <span className='font-normal'>${priceProducts}</span></p>
        <p className='flex font-bold text-xl gap-2'>Products quantity: <span className='font-normal'>{quantityProducts}</span></p>
      </div>
      <div className='flex items-center'>
        <Link 
          className='arrowOrderUser'
          to={`/my-order/my-last-order/${id}`}>
          <IoIosArrowForward />
        </Link>
      </div>
    </section>
  )
}

export { UserOrders }