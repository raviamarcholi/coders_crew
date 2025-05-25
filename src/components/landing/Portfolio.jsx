import React from 'react'

const Portfolio = () => {
    return (
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
    )
}

export default Portfolio