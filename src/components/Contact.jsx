import React from 'react'

export default function Contact() {
    return (
        <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 to-blue-500 px-4 py-16">
            <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-50 p-8 rounded-2xl shadow-lg">
                {/* Contact Info Section */}
                <div className="space-y-6">
                    <h1 className="text-4xl font-bold text-gray-800">Get in Touch</h1>
                    <p className="text-lg text-gray-600">
                        Have any questions or just want to say hello? Fill out the form and we’ll get back to you.
                    </p>

                    <div className="flex items-start space-x-4">
                        <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                            <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-md font-medium text-gray-700">
                            Zozo Plaza, Street, State, Postal Code
                        </span>
                    </div>

                    <div className="flex items-start space-x-4">
                        <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                            <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="text-md font-medium text-gray-700">
                        +1 (123) 456-7890
                        </span>
                    </div>

                    <div className="flex items-start space-x-4">
                        <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-md font-medium text-gray-700">
                        contact@homenest.com
                        </span>
                    </div>
                </div>

                {/* Contact Form */}
                <form className="space-y-4">
                    <div>
                        <label htmlFor="name" className="text-sm font-medium text-gray-700">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Your Name"
                            className="w-full mt-1 py-3 px-4 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="you@example.com"
                            className="w-full mt-1 py-3 px-4 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="tel" className="text-sm font-medium text-gray-700">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            name="tel"
                            id="tel"
                            placeholder="+1 234 567 890"
                            className="w-full mt-1 py-3 px-4 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="text-sm font-medium text-gray-700">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            placeholder="Write your message here..."
                            className="w-full mt-1 py-3 px-4 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-lg transition duration-300"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
