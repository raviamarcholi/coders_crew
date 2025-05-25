import React from 'react'
import logo from "../../assets/raghuveer_logo.jpeg"
const Nav = () => {
  return (
        <nav className="fixed w-full bg-white shadow-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className='flex items-center'>
            <img src={logo} className='w-14' alt='logo'/>
            <div className="text-2xl font-bold gradient-text">Raghuveer Freelacing</div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="nav-link">
                Home
              </a>
              <a href="#services" className="nav-link">
                Services
              </a>
              <a href="#portfolio" className="nav-link">
                Portfolio
              </a>
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </div>
            <button className="md:hidden focus:outline-none" id="menu-toggle">
              <i className="fas fa-bars text-2xl" />
            </button>
          </div>
          {/* Mobile Menu */}
          <div className="md:hidden hidden mt-4" id="mobile-menu">
            <div className="flex flex-col space-y-3">
              <a href="#home" className="nav-link">
                Home
              </a>
              <a href="#services" className="nav-link">
                Services
              </a>
              <a href="#portfolio" className="nav-link">
                Portfolio
              </a>
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
  )
}

export default Nav