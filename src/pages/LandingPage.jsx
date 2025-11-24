import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div
            className="min-h-screen bg-cover bg-center bg-fixed flex items-center justify-center relative overflow-hidden"
            style={{
                backgroundImage: 'url("/images/banner.jpg")',
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/70 to-slate-900/80"></div>

            <div className="absolute top-10 left-10 w-20 h-20 opacity-20 animate-float">
                <div className="text-6xl">🍃</div>
            </div>
            <div className="absolute bottom-20 right-16 w-16 h-16 opacity-30 animate-float" style={{ animationDelay: '2s' }}>
                <div className="text-5xl">🌿</div>
            </div>
            <div className="absolute top-1/3 right-20 w-12 h-12 opacity-25 animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-4xl">🌱</div>
            </div>

            <div className="relative z-10 w-full h-full min-h-screen flex items-center justify-center">
                <div className="text-center text-white max-w-4xl mx-auto px-4">
                    <div className="mb-8">
                        <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-emerald-200 to-green-300 bg-clip-text text-transparent">
                            Paradise Nursery
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-green-500 mx-auto rounded-full mb-6"></div>
                        <p className="text-2xl font-light text-emerald-100 mb-2">
                            Breathe Life Into Your Space
                        </p>
                    </div>

                    <div className="mb-12">
                        <p className="text-xl md:text-2xl leading-relaxed mb-8 text-gray-100 font-light max-w-3xl mx-auto">
                            Transform your home into a <span className="text-emerald-300 font-medium">living sanctuary</span> with our
                            curated collection of premium houseplants. Each plant is carefully selected to bring
                            <span className="text-emerald-300 font-medium"> nature's harmony</span> into your daily life.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-8">
                            <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                                <div className="text-3xl font-bold text-emerald-300">50+</div>
                                <div className="text-sm text-emerald-100">Plant Varieties</div>
                            </div>
                            <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                                <div className="text-3xl font-bold text-emerald-300">100%</div>
                                <div className="text-sm text-emerald-100">Organic Growth</div>
                            </div>
                            <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                                <div className="text-3xl font-bold text-emerald-300">🌟</div>
                                <div className="text-sm text-emerald-100">Expert Curated</div>
                            </div>
                        </div>
                    </div>



                    <div className="space-y-6">
                        <Link
                            to="/products"
                            className="group relative inline-flex items-center justify-center bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold py-4 px-12 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
                        >
                            <span className="relative z-10 flex items-center">
                                Explore Collection
                                <svg className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
                        </Link>

                        <div className="flex justify-center space-x-8 text-sm text-emerald-100">
                            <div className="flex items-center">
                                <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></div>
                                Free Shipping Over $50
                            </div>
                            <div className="flex items-center">
                                <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></div>
                                30-Day Plant Guarantee
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                        <div className="w-6 h-10 border-2 border-emerald-300 rounded-full flex justify-center">
                            <div className="w-1 h-3 bg-emerald-300 rounded-full mt-2"></div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(5deg); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default LandingPage;