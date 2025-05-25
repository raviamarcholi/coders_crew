import React from 'react'

const Process = () => {
    return (
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
    )
}

export default Process