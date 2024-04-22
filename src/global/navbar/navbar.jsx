import { NavLink } from "react-router-dom"

function Navbar(){
  const classItemActive = ({ isActive }) => isActive ? 'underline underline-offset-4' : 'none';

  return (
    <section className="navbar flex justify-between px-3 py-2.5">
      <nav className="navbar__slogan flex gap-2 items-center">
        <NavLink to={"/"}>
          <span className="font-bold text-xl">Shopi</span>
        </NavLink>
        <NavLink 
        to={"/all"} 
        className={classItemActive}>
          All
        </NavLink>
        <NavLink 
        to={"/clothes"} 
        className={classItemActive}>
          Clothes
        </NavLink>
        <NavLink 
        to={"/furniture"} 
        className={classItemActive}>
          Furniture
        </NavLink>
        <NavLink 
        to={"/toys"} 
        className={classItemActive}>
          Toys
        </NavLink>
        <NavLink 
        to={"/technology"} 
        className={classItemActive}>
          Technology
        </NavLink>
        <NavLink 
        to={"/others"} 
        className={classItemActive}>
          Others
        </NavLink>
      </nav>
      <nav className="navbar__shop flex gap-2">
        <NavLink to={"/"}>
          <span className="text-gray-500">myemail@gmail.com</span>
        </NavLink>
        <NavLink 
        to={'/my-profile'} 
        className={classItemActive}>
          My Profile
        </NavLink>
        <NavLink 
        to={'/my-order'} 
        className={classItemActive}>
          My order
        </NavLink>
      </nav>  
    </section>
  )
}
export { Navbar }