import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../utils/Dropdown';
import Transition from '../utils/Transition.js';

function Header() {

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [top, setTop] = useState(true);

  const mobileNav = useRef(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNavOpen.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target)) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  

  return (
   

    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-white blur shadow-lg'}`}>
        
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
             {/* Logo */}
             <Link to="/" className="block" aria-label="Cruip">
              <svg    width="69" height="69" xmlns="http://www.w3.org/2000/svg">">
              <image href="https://bat-web-portal.s3.amazonaws.com/logo2.png"  height="69" width="69"/>
              </svg>
            </Link>
          </div>

         {/* Desktop navigation */}
         <nav className="hidden md:flex md:flex-grow">

{/* Desktop menu links */}
<ul className="flex flex-grow justify-end flex-wrap items-center">
  <li>
    <Link to="/#" className="text-black hover:text-purple-600 px-4 py-2 flex items-center transition duration-150 ease-in-out">
      Home
    </Link>
  </li>
  <li>
    <a target="_blank" href="https://bat.sharepoint.com/sites/CloudAutomationPublic/SitePages/Cloud(2).aspx" className="text-black hover:text-purple-600 px-4 py-2 flex items-center transition duration-150 ease-in-out">Cloud Services</a>
  </li>
  <li>
  <a target="_blank" href="https://bat.sharepoint.com/sites/CloudAutomationPublic" className="text-black hover:text-purple-600 px-4 py-2 flex items-center transition duration-150 ease-in-out">Cloud Team</a>
  </li>
  <li>
  <a target="_blank" href="https://bat.sharepoint.com/sites/CloudAutomationPublic/SitePages/About.aspx" className="text-black hover:text-purple-600 px-4 py-2 flex items-center transition duration-150 ease-in-out">About us</a>
  </li>
  <li>
   
    <a target="_blank" href="https://azure.microsoft.com/en-us/pricing/calculator/" className="text-black hover:text-purple-600 px-4 py-2 flex items-center transition duration-150 ease-in-out">Pricing</a>
  </li>
  {/* 1st level: hover */}
  <Dropdown title="Support" className="text-black hover:text-purple-600 px-4 py-2 flex items-center transition duration-150 ease-in-out">
    {/* 2nd level: hover */}
    <li>
      <Link to="/contact" className="font-medium text-sm text-white hover:text-purple-600 flex py-2 px-4 leading-tight">Contact us</Link>
    </li>
    <li>
      <Link to="/#0" className="font-medium text-sm text-white hover:text-purple-600 flex py-2 px-4 leading-tight">FAQ's</Link>
    </li>
    <li>
      <Link to="/#0" className="font-medium text-sm text-white hover:text-purple-600 flex py-2 px-4 leading-tight">Help Center</Link>
    </li>
  </Dropdown>
</ul>

{/* Desktop sign in links */}
<ul className="flex flex-grow justify-end flex-wrap items-center">
  <li>
    <Link to="/signin" className="font-medium text-black hover:bg-black hover:text-white px-4 py-3 flex items-center transition duration-150 ease-in-out">Sign in</Link>
  </li>
  <li>
    <Link to="/signup" className="btn-sm text-white bg-blue-1000 hover:bg-purple-700 ml-3">Sign up</Link>
  </li>
</ul>

</nav>

{/* Mobile menu */}
<div className="md:hidden">

{/* Hamburger button */}
<button className={`hamburger ${mobileNavOpen && 'active'}`} aria-controls="mobile-nav" aria-expanded={mobileNavOpen} onClick={() => setMobileNavOpen(!mobileNavOpen)}>
  <span className="sr-only">Menu</span>
  <svg className="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <rect y="4" width="24" height="2" rx="1" />
    <rect y="11" width="24" height="2" rx="1" />
    <rect y="18" width="24" height="2" rx="1" />
  </svg>
</button>

{/*Mobile navigation */}
<nav id="mobile-nav" ref={mobileNav} className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out" style={mobileNavOpen ? { maxHeight: mobileNav.current.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: .8 } }>
  <ul className="bg-gray-800 px-4 py-2">
    <li>
      <Link to="/#0" className="flex text-gray-300 hover:text-gray-200 py-2">Home</Link>
    </li>
    <li>
      <Link to="/pricing" className="flex text-gray-300 hover:text-gray-200 py-2">Pricing</Link>
    </li>
    <li>
      <Link to="/blog" className="flex text-gray-300 hover:text-gray-200 py-2">Blog</Link>
    </li>
    <li>
      <Link to="/about" className="flex text-gray-300 hover:text-gray-200 py-2">About us</Link>
    </li>
    <li className="py-2 my-2 border-t border-b border-gray-700">
      <span className="flex text-gray-300 py-2">Support</span>
      <ul className="pl-4">
        <li>
          <Link to="/contact" className="text-sm flex font-medium text-gray-400 hover:text-gray-200 py-2">Contact us</Link>
        </li>
        <li>
          <Link to="/help" className="text-sm flex font-medium text-gray-400 hover:text-gray-200 py-2">Help center</Link>
        </li>
        <li>
          <Link to="/404" className="text-sm flex font-medium text-gray-400 hover:text-gray-200 py-2">404</Link>
        </li>
      </ul>
    </li>
    <li>
      <Link to="/signin" className="flex font-medium w-full text-purple-600 hover:text-gray-200 py-2 justify-center">Sign in</Link>
    </li>
    <li>
      <Link to="/signup" className="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm text-white bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out">Sign up</Link>
    </li>
  </ul>
</nav>

</div>

</div>
</div>
 
    </header> 
  );
}

export default Header;
