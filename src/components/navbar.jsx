import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='px-20 bg-zinc-900 flex justify-between items-center h-24 max-w-full mx-auto px-4 text-white'>
      <Link to="/" className='w-full text-3xl font-bold text-[#00df9a]'>CYBERDOST</Link> {/* Home link */}
      <ul className='hidden md:flex'>
        <li className='p-4'><Link to="/">Home</Link></li> {/* Home link */}
        <li className='p-4'><Link to="/forum">Forum</Link></li> {/* Company link */}
        <li className='p-4'><Link to="/news">News</Link></li> {/* Resources link */}
        <li className='p-4'><Link to="/GovtMeasures">Measures</Link></li> {/* About link */}
        <li className='p-4'><Link to="/login">Login</Link></li> {/* Contact link */}
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
    </div>
  );
};

export default Navbar;
