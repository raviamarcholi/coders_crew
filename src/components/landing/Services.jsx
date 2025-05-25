import React from 'react'
import services from '../../constants/services'

const Services = () => {
    return (
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
                        services.map((service, index) => (
                            <div key={index} className=" p-8 hover:scale-105 cursor-pointer border-2 border-purple-200 bg-gradient-to-br hover:bg-gradient-to-b from-white to-purple-100 rounded-xl shadow-md service-card transition duration-300 fade-in">
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
    )
}

export default Services