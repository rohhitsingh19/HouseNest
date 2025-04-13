import React from 'react'
import image3 from '../assets/image3.jpg'

export default function About() {
    return (
        <div className="py-16 bg-gradient-to-r from-blue-200 to-blue-500">
            <div className="container mx-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:w-5/12 lg:w-5/12">
                        <img
                            src={image3}
                            alt="image3"
                            className="rounded-lg shadow-lg w-full object-cover"
                        />
                    </div>
                    <div className="md:w-7/12 lg:w-6/12">
                        <h2 className="text-2xl text-white font-bold md:text-4xl">
                            Welcome to HouseNest — Your Home, Your Haven
                        </h2>
                        <p className="mt-6 text-white">
                            At HouseNest, we believe a house is more than bricks and walls — it's where life happens. Our mission is to connect individuals and families with spaces that perfectly reflect their lifestyles, dreams, and goals.
                        </p>
                        <p className="mt-4 text-white">
                            Whether you're buying your first home, looking for a luxury upgrade, or searching for the perfect rental, HouseNest offers personalized guidance, a curated selection of premium properties, and unmatched support every step of the way.
                        </p>
                    </div>
                </div>

                {/* Features Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <h2 className="text-center text-3xl sm:text-5xl font-bold mb-16 text-white">
                        Discover Your Perfect Space
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-transform duration-300 p-6">
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">Premium Locations</h3>
                            <p className="text-gray-700">Explore properties in top-tier neighborhoods that blend lifestyle, accessibility, and growth potential.</p>
                        </div>
                        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-transform duration-300 p-6">
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">Tailored For You</h3>
                            <p className="text-gray-700">Find homes and spaces that suit your style, budget, and future — curated to your needs.</p>
                        </div>
                        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-transform duration-300 p-6">
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">Trusted Experts</h3>
                            <p className="text-gray-700">Get step-by-step support from real estate professionals who truly care about your journey.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

