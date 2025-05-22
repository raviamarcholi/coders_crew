import { useState } from 'react'
import Services from './constants/services'

function App() {
  return (
    <>
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold gradient-text">Raghuveer Freelacing</div>
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
              <a href="#about" className="nav-link">
                About
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
              <a href="#about" className="nav-link">
                About
              </a>
              {/* <a href="#testimonials" className="nav-link">
                Testimonials
              </a> */}
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section
        id="home"
        className="pt-32 pb-20 px-6 bg-gradient-to-r from-blue-50 to-purple-50"
      >
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Digital Solutions{" "}
                <span className="gradient-text">That Drive Growth</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                We craft exceptional web and mobile applications with stunning
                digital graphics to elevate your brand and engage your audience.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300"
                >
                  Get Started
                </a>
                <a
                  href="#portfolio"
                  className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition duration-300"
                >
                  View Work
                </a>
              </div>
            </div>
            <div className="md:w-1/2 fade-in delay-1">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Digital solutions"
                className="rounded-xl shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      {/* <section className="py-12 bg-white">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div className="fade-in">
          <div className="text-4xl font-bold gradient-text mb-2">40+</div>
          <p className="text-gray-600">Projects Delivered</p>
        </div>
        <div className="fade-in delay-1">
          <div className="text-4xl font-bold gradient-text mb-2">95%</div>
          <p className="text-gray-600">Client Retention</p>
        </div>
        <div className="fade-in delay-2">
          <div className="text-4xl font-bold gradient-text mb-2">5+</div>
          <p className="text-gray-600">Years Experience</p>
        </div>
        <div className="fade-in delay-3">
          <div className="text-4xl font-bold gradient-text mb-2">10+</div>
          <p className="text-gray-600">Team Members</p>
        </div>
      </div>
    </div>
  </section> */}
      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
              Services.map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-md service-card transition duration-300 fade-in">
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <i className={`fas fa-${service.icon} text-${service.color}-600  text-2xl`} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {service.desc}
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    {
                      service.data.map((data, index) => (
                        <li key={index} className="flex items-center">
                          <i className="fas fa-check-circle text-blue-500 mr-2" />{data}
                        </li>
                      ))
                    }
                  </ul>
                </div>
              ))
            }          
          </div>
        </div>
      </section>
      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Portfolio</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A showcase of our recent work across various industries
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="portfolio-item rounded-xl overflow-hidden shadow-lg fade-in">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1436&q=80"
                  alt="E-commerce Platform"
                  className="w-full h-64 object-cover"
                />
                <div className="portfolio-overlay absolute inset-0 bg-blue-600 bg-opacity-90 flex items-center justify-center p-6">
                  <div className="text-center">
                    <h3 className="text-white text-xl font-bold mb-2">
                      Hospital Management System                </h3>
                    <p className="text-blue-100 mb-4">
                      CMS for doctors to keep track on patient and appointments                </p>
                    <span className="inline-block bg-white text-blue-600 px-4 py-2 rounded-lg font-medium">
                      Web Development
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Project 2 */}
            <div className="portfolio-item rounded-xl overflow-hidden shadow-lg fade-in delay-1">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Fitness App"
                  className="w-full h-64 object-cover"
                />
                <div className="portfolio-overlay absolute inset-0 bg-purple-600 bg-opacity-90 flex items-center justify-center p-6">
                  <div className="text-center">
                    <h3 className="text-white text-xl font-bold mb-2">
                      Chippy Elegence
                    </h3>
                    <p className="text-purple-100 mb-4">
                      E-commerce platform for online cloth shopping
                    </p>
                    <span className="inline-block bg-white text-purple-600 px-4 py-2 rounded-lg font-medium">
                      App Development
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12 fade-in delay-3">
            <a
              href="#"
              className="inline-block border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition duration-300"
            >
              View All Projects
            </a>
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A structured approach to ensure quality and efficiency in every
              project
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center fade-in">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xl">1</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Discovery</h3>
              <p className="text-gray-600">
                We analyze your requirements and goals to create a strategic plan.
              </p>
            </div>
            {/* Step 2 */}
            <div className="text-center fade-in delay-1">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold text-xl">2</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Design</h3>
              <p className="text-gray-600">
                We create wireframes and prototypes to visualize the solution.
              </p>
            </div>
            {/* Step 3 */}
            <div className="text-center fade-in delay-2">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold text-xl">3</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Development</h3>
              <p className="text-gray-600">
                We build the solution with clean, maintainable code.
              </p>
            </div>
            {/* Step 4 */}
            <div className="text-center fade-in delay-3">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-16 h-16 bg-yellow-200 rounded-full flex items-center justify-center">
                  <span className="text-yellow-600 font-bold text-xl">4</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Delivery</h3>
              <p className="text-gray-600">
                We deploy the solution and provide ongoing support.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      {/* <section id="testimonials" className="py-20 bg-white">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16 fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Client <span className="gradient-text">Testimonials</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Don't just take our word for it - here's what our clients say
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-gray-50 p-8 rounded-xl fade-in">
          <div className="flex items-center mb-6">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
              alt="Client"
              className="w-12 h-12 rounded-full object-cover mr-4"
            />
            <div>
              <h4 className="font-bold">Sarah Johnson</h4>
              <p className="text-gray-500 text-sm">CEO, RetailTech</p>
            </div>
          </div>
          <p className="text-gray-600 mb-6">
            "Coders Crew transformed our e-commerce platform, resulting in a 150%
            increase in online sales. Their attention to detail and technical
            expertise was impressive."
          </p>
          <div className="flex text-yellow-400">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
        </div>
        <div className="bg-gray-50 p-8 rounded-xl fade-in delay-1">
          <div className="flex items-center mb-6">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
              alt="Client"
              className="w-12 h-12 rounded-full object-cover mr-4"
            />
            <div>
              <h4 className="font-bold">Michael Chen</h4>
              <p className="text-gray-500 text-sm">Founder, FitTrack</p>
            </div>
          </div>
          <p className="text-gray-600 mb-6">
            "The mobile app developed by Coders Crew exceeded our expectations.
            Their team understood our vision and delivered a product that our
            users love."
          </p>
          <div className="flex text-yellow-400">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
        </div>
        <div className="bg-gray-50 p-8 rounded-xl fade-in delay-2">
          <div className="flex items-center mb-6">
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
              alt="Client"
              className="w-12 h-12 rounded-full object-cover mr-4"
            />
            <div>
              <h4 className="font-bold">Emily Rodriguez</h4>
              <p className="text-gray-500 text-sm">
                Marketing Director, BrandVibe
              </p>
            </div>
          </div>
          <p className="text-gray-600 mb-6">
            "The brand identity package created by Coders Crew perfectly captured
            our company's essence. Their design team is incredibly talented and
            professional."
          </p>
          <div className="flex text-yellow-400">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half-alt" />
          </div>
        </div>
      </div>
    </div>
  </section> */}
      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-r from-blue-50 to-purple-50"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to <span className="gradient-text">Collaborate?</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get in touch to discuss your project requirements and how we can help.
            </p>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8 fade-in">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <i className="fas fa-envelope text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p className="text-gray-600">raghuveerfreelancing@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-lg mr-4">
                    <i className="fas fa-phone-alt text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Phone</h4>
                    <p className="text-gray-600">+91 7567783476</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <i className="fas fa-map-marker-alt text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Location</h4>
                    <p className="text-gray-600">
                      Gujarat, India
                    </p>
                  </div>
                </div>
              </div>
              {/* <h3 className="text-xl font-bold mt-10 mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition duration-300"
                >
                  <i className="fab fa-twitter" />
                </a>
                <a
                  href="#"
                  className="bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-full transition duration-300"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-gray-900 text-white p-3 rounded-full transition duration-300"
                >
                  <i className="fab fa-github" />
                </a>
                <a
                  href="#"
                  className="bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-full transition duration-300"
                >
                  <i className="fab fa-dribbble" />
                </a>
              </div> */}
            </div>
            <div className="md:w-1/2 fade-in delay-1">
              <form id="contact-form" className="bg-white p-8 rounded-xl shadow-md">
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="service"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Service Needed
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a service</option>
                    <option value="web">Web Development</option>
                    <option value="app">App Development</option>
                    <option value="design">Digital Graphics</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    defaultValue={""}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
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
        </div>
      </footer>
    </>
  )
}

export default App
