import React from 'react'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Home() {
    const [isLoaded, setIsLoaded] = useState(false);
    
    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div className="mx-auto w-full max-w-8xl">
            {/* Hero Section with Background Image */}
            <section className="relative h-screen overflow-hidden">
                {/* Background Image */}
                <div className="absolute w-full min-h-screen overflow-hidden">
                    <img 
                     src={image1} 
                     alt="Background" 
                     className="w-full h-full object-cover filter brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
    </div>
                
                {/* Content */}
                <div className="relative z-10 h-full flex items-center px-4 sm:px-6 lg:px-8">
                    <div className="container mx-auto flex flex-col lg:flex-row items-center">
                        {/* Left Side - Image */}
                        <div className={`lg:w-1/2 mb-10 lg:mb-0 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                            <div className="rounded-lg overflow-hidden shadow-2xl transform lg:translate-x-12">
                                <img 
                                    src={image2} 
                                    alt="Featured Property" 
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                        
                        {/* Right Side - Text */}
                        <div className={`lg:w-1/2 lg:pl-16 transition-transform duration-1000 ${isLoaded ? 'translate-x-0' : 'translate-x-24'}`}>
                            <div className="text-center lg:text-left text-white">
                                <h1 className="text-4xl lg:text-5xl font-bold mb-4">Find Your Dream Home</h1>
                                <p className="text-xl mb-6">Discover the perfect property that meets all your needs with HomeNest. We offer a wide range of properties to suit every lifestyle and budget.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    );
}


