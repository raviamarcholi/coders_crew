import React from 'react'

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-20 bg-white">
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
        </section>
    )
}

export default Testimonials