import React, { useRef, useState, useEffect } from 'react'

const Contact = () => {
    const form = useRef();
    const serviceID = (import.meta.env.VITE_EMAIL_SERVICE_ID)
    const templateID = (import.meta.env.VITE_EMAIL_TEMPLATE_ID)
    const publicKey = (import.meta.env.VITE_EMAIL_PUBLIC_KEY)
    const [popUp, setPopUp] = useState(false)
    const [loader, setLoader] = useState(false)
    const [isSent, setIsSent] = useState(false)
    const sendEmail = async (e) => {
        setLoader(true)
        try {
            await emailjs.sendForm(serviceID, templateID, form.current, publicKey)
            setIsSent(true)
        } catch (error) {
            console.log(error)
        }
        finally {
            setLoader(false)
        }
    };
    useEffect(() => {

        if (isSent) {
            setTimeout(() => {
                setIsSent(false)
            }, 3000);
        }
    }, [isSent])

    return (
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
                    </div>
                    <div className="md:w-1/2 fade-in delay-1">
                        <form ref={form} id="contact-form" className="bg-white p-8 rounded-xl shadow-md">
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
    )
}

export default Contact