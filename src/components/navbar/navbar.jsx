/* Hooks */
import { useContext } from 'react'

/* Components */
import { NavLink } from 'react-router-dom'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { ShopiCartContext } from '../../context'

function Navbar(){
  const classItemActive = ({ isActive }) => isActive ? 'listActive' : 'none';
  const context = useContext(ShopiCartContext);

  return (
    <section className="flex items-center justify-between px-3 py-2.5">
      <nav className="flex gap-3 items-center">
        <div className='flex'>
          <NavLink to={"/"}>
            <span className="font-bold text-3xl">Shopi</span>
          </NavLink>
        </div>
        <div className='flex gap-2 h-full pt-2'>
          <NavLink 
          to={"/all"} 
          className={`${classItemActive} listHeader`}>
            All
          </NavLink>
          <NavLink 
          to={"/clothes"} 
          className={`${classItemActive} listHeader`}>
            Clothes
          </NavLink>
          <NavLink 
          to={"/furniture"} 
          className={`${classItemActive} listHeader`}>
            Furniture
          </NavLink>
          <NavLink 
          to={"/toys"} 
          className={`${classItemActive} listHeader`}>
            Toys
          </NavLink>
          <NavLink 
          to={"/technology"} 
          className={`${classItemActive} listHeader`}>
            Technology
          </NavLink>
          <NavLink 
          to={"/others"} 
          className={`${classItemActive} listHeader`}>
            Others
          </NavLink>
        </div>
      </nav>
      <nav className="flex gap-3 pt-2">
        <div className='flex gap-2'>
          <NavLink 
          to={'/my-profile'} 
          className={`${classItemActive} listHeader`}>
            My Profile
          </NavLink>
          <NavLink 
          to={'/my-order'} 
          className={`${classItemActive} listHeader`}>
            My orders
          </NavLink>
          <NavLink 
          to={'/sign-in'} 
          className={`${classItemActive} listHeader`}>
            Sign In
          </NavLink>
        </div>
        <div className='border-x-2 px-2 border-[#351e1a]'>
          <span className="text-[#351e1a]">myemail@gmail.com</span>
        </div>
        <div>
          <NavLink onClick={() => context.setCheckoutCartAside(true)} className='flex gap-1 items-center'>
            <MdOutlineShoppingCart  className='w-5 h-5' />
            <span>{context.counter}</span>
          </NavLink>
        </div>
      </nav>  
    </section>
  )
}
export { Navbar }