import React from 'react'

const Stats = () => {
    return (
        <section className="py-12 bg-white">
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
        </section>
    )
}

export default Stats