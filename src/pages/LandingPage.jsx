import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div
            className="min-h-screen bg-cover bg-center bg-fixed flex items-center justify-center"
            style={{
                backgroundImage: 'url("/images/nursery-background.jpg")',
            }}
        >
            <div className="bg-black/50 w-full h-full min-h-screen flex items-center justify-center">
                <div className="text-center text-white max-w-2xl mx-auto px-4">
                    <h1 className="text-5xl font-bold mb-6">Paradise Nursery</h1>
                    <p className="text-xl mb-8 leading-relaxed">
                        Welcome to Paradise Nursery, your one-stop destination for beautiful houseplants.
                        We offer a wide variety of indoor plants that will transform your living space into
                        a green oasis. From low-light tolerant plants to sun-loving succulents, we have
                        something for every plant enthusiast.
                    </p>
                    <Link
                        to="/products"
                        className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300 inline-block"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;