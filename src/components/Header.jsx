import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <header className="bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <Link
                        to="/"
                        className="flex items-center space-x-3 group"
                    >
                        <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-emerald-200 transition-all duration-300">
                            <span className="text-white text-lg font-bold">🌿</span>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent">
                                Paradise Nursery
                            </h1>
                        </div>
                    </Link>

                    <nav className="flex items-center space-x-8">
                        <Link
                            to="/"
                            className={`relative px-3 py-2 font-medium transition-all duration-300 ${
                                isActive('/')
                                    ? 'text-emerald-600'
                                    : 'text-gray-600 hover:text-emerald-500'
                            }`}
                        >
                            Home
                            {isActive('/') && (
                                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"></div>
                            )}
                        </Link>

                        <Link
                            to="/products"
                            className={`relative px-3 py-2 font-medium transition-all duration-300 ${
                                isActive('/products')
                                    ? 'text-emerald-600'
                                    : 'text-gray-600 hover:text-emerald-500'
                            }`}
                        >
                            Plants
                            {isActive('/products') && (
                                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"></div>
                            )}
                        </Link>

                        <Link
                            to="/cart"
                            className="relative p-3 bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl border border-emerald-100 hover:border-emerald-300 transition-all duration-300 group"
                        >
                            <div className="flex items-center space-x-2">
                                <svg
                                    className="w-6 h-6 text-emerald-600 group-hover:text-emerald-700 transition-colors"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                {totalQuantity > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shadow-lg transform group-hover:scale-110 transition-transform">
                                        {totalQuantity}
                                    </span>
                                )}
                            </div>
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;