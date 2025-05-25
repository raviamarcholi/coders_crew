import React from 'react'

const Footer = () => {
  return (
<footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold gradient-text mb-4">Raghuveer Freelancing</div>
              <p className="text-gray-400 max-w-md">
                Innovative digital solutions for the modern business landscape.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4">Services</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition duration-300"
                    >
                      Web Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition duration-300"
                    >
                      App Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition duration-300"
                    >
                      Digital Graphics
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition duration-300"
                    >
                      UI/UX Design
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-4">Company</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#about"
                      className="text-gray-400 hover:text-white transition duration-300"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#portfolio"
                      className="text-gray-400 hover:text-white transition duration-300"
                    >
                      Portfolio
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className=' my-3' />
          <p className='text-center text-gray-400'> ©Ravi Amarcholi - All Rights Reserved@2025 </p>
        </div>
      </footer>
  )
}

export default Footer