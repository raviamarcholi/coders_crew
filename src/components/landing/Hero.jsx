import React from 'react'

const Hero = () => {
    return (
        <section
            id="home"
            className="pt-32 pb-20 px-6 bg-gradient-to-r from-blue-50 to-purple-200"
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
                    <div className="md:w-1/2  fade-in delay-1">
                        <img
                            src="https://larateesdesigns.com/wp-content/uploads/2024/03/lara-tees-designs-a-designer-working-on-a-professional-website-design.png"
                            alt="Digital solutions"
                            className="rounded-xl shadow-xl w-full h-[450px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero