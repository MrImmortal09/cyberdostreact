import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='pr-40 pl-20 max-w-full mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 bg-zinc-800'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>CYBERDOST</h1>
        <p className='py-4'>Your one stop destination for all things cyber-crime related.</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <Link to="https://www.facebook.com"><FaFacebookSquare size={30} /></Link>
            <Link to="https://www.instagram.com"><FaInstagram size={30} /></Link>
            <Link to="https://www.x.com"><FaTwitterSquare size={30} /></Link>
            <Link to="https://www.github.com"><FaGithubSquare size={30} /></Link>
            <Link to="https://www.dribbble.com"><FaDribbbleSquare size={30} /></Link>
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-end mt-6'>
    {/* <div>
        <h6 className='font-medium text-[#00DF9A]'>Solutions</h6>
        <ul>
            <li className='py-2 text-sm'>Analytics</li>
            <li className='py-2 text-sm'>Marketing</li>
            <li className='py-2 text-sm'>Commerce</li>
            <li className='py-2 text-sm'>Insights</li>
        </ul>
    </div> */}
    <div>
        <h6 className='font-medium text-[#00DF9A]'>Support</h6>
        <ul>
            <li className='py-2 text-sm'><Link to="/ContactUs">About Us</Link></li>
            <li className='py-2 text-sm'><Link to="/ContactUs">Contact Us</Link></li>
        </ul>
    </div>
    {/* <div>
        <h6 className='font-medium text-[#00DF9A]'>Company</h6>
        <ul>
            <li className='py-2 text-sm'>Blog</li>
            <li className='py-2 text-sm'>Jobs</li>
            <li className='py-2 text-sm'>Press</li>
            <li className='py-2 text-sm'>Careers</li>
        </ul>
    </div> */}
    <div className='ml-20'>
        <h6 className='font-medium text-[#00DF9A]'>Legal</h6>
        <ul>
            <li className='py-2 text-sm'><Link to="https://github.com/MrImmortal09/cyberdostreact/blob/main/README.md">Claim</Link></li>
            <li className='py-2 text-sm'><Link to="https://github.com/MrImmortal09/cyberdostreact/blob/main/README.md">Policy</Link></li>
            <li className='py-2 text-sm'><Link to="https://github.com/MrImmortal09/cyberdostreact/blob/main/README.md">Terms</Link></li>
        </ul>
    </div>
      </div>
    </div>
  );
};

export default Footer;