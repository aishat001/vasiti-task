import React from 'react'
import { Link } from 'react-router-dom';
import vasitiLogo from '../../assets/vasiti-Logo.png'
import  "./Header.css"


export default function Header() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);

    const subNav = ['MARKETPLACE', 'WHOLESALE CENTER', 'SELLER CENTER', 'SERVICES', 'INTERNSHIPS', 'EVENTS']

  return (
    <>
      <nav className="relative flex items-center justify-between px-5 md:px-20 py-3 fixed bg-white dark:bg-primary">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
            to=""
              className="text-sm font-bold font-ranchers logo-color leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            >                   
             <img src={vasitiLogo} alt="logo"/>
            </Link>
            <button
              className=" cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-dark rounded bg-dark block lg:hidden outline focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* <MenuAlt3Icon/> */}
            </button>
          </div>
          <div
            className={
              "flex-col items-start lg:flex-row lg:flex flex-grow lg:items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
        
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
                <Link 
                to=""
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                >About us</Link>
              </li>
              <li className="nav-item">
                <Link
                to=""
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                >Stories</Link>
              </li>
              <li className="nav-item">
                <Link
                to=""
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                >Contact us </Link>
              </li>
              <li className="nav-item">
                <Link
                to=""
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                >Log in</Link>
              </li>
              <li className="nav-item">
              <button type="button" className="bg-orange-500 text-white btn-border-color  mr-3 bg-btn-hover mediumButton">Sign Up</button>
              </li>

            </ul>
          </div>


        </div>
      </nav>
      <div className='flex justify-center space-x-5 lg:space-x-14 sm-boxShadow py-4 overflow-x-scroll  px-10'>
            {subNav.map(item => 
              <Link
              to=""
              className='min-w-max '
              >
                {item}
              </Link>
              )}
      </div>
      </>
  );
}