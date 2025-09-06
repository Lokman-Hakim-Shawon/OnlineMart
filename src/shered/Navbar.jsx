import react,{useState} from 'react';
import { Link } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";
const Navbar = ({number}) => {
  const [isOpen,setIsOpen]=useState(false)
  const handleLinkClick=()=>{
    setIsOpen(false)
  }
  const Navlink=<>
  <Link onClick={handleLinkClick} to='/' className='border-b-2 border-gray-100 lg:border-0'>home</Link>
  <Link onClick={handleLinkClick} to='/shop' className='border-b-2 border-gray-100 lg:border-0'>shop</Link>
  <Link onClick={handleLinkClick} to='/category' className='border-b-2 border-gray-100 lg:border-0'>categories</Link>
  <Link onClick={handleLinkClick} to='new_product' className='border-b-2 border-gray-100 lg:border-0'>new products</Link>
  <Link onClick={handleLinkClick} to='flash_sell' className='border-b-2 border-gray-100 lg:border-0'>flash sell</Link>
  </>
    return (
      <div className="navbar bg-primaryColor shadow-sm text-white fixed z-10 -mt-1">
      <div className="navbar-start z-10">
        <div className="dropdown">
          <div onClick={()=>setIsOpen(!isOpen)} tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
         {
          isOpen &&(
            <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100  z-1 mt-3 -ml-2 h-screen w-52 p-4 shadow text-black text-lg  gap-y-4 ">
            {Navlink}
          </ul>
          )
         }
        </div>
        <a className="btn btn-ghost text-lg ">Online Mart</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-x-8 text-xl uppercase">
          {Navlink}
        </ul>
      </div>
      <div className="navbar-end lg:pr-24 pr-6 mt-4 lg:mt-0">
        <span className=" px-2 py-1 text-xs -mr-2 bg-black mb-8 z-1  rounded-full absolute ">{number}</span>
      <FaCartShopping className='z-2 text-3xl lg:text-4xl '/>

      </div>
    </div>
    );
};

export default Navbar;