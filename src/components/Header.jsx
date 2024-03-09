import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className='w-full p-5 h-28 bg-orange-700 flex items-center justify-center gap-3'>
        <NavLink to= "/" className={({isActive})=> `${isActive ? 'transition-all bg-white p-2 rounded-xl' : 'text-grey-300 transition-all'}`}>Home</NavLink>
        <NavLink to= "/about" className={({isActive})=> `${isActive ? 'transition-all bg-white p-2 rounded-xl' : 'text-grey-300 transition-all'}`}>About</NavLink>
        <NavLink to= "/contact" className={({isActive})=> `${isActive ? 'transition-all bg-white p-2 rounded-xl' : 'text-grey-300 transition-all'}`}>Contact</NavLink>
      </div>
    </>
  );
}

export default Header;
