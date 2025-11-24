import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    const location = useLocation();

    return (
        <header className="bg-green-800 text-white shadow-md">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold">Paradise Nursery</Link>

                <nav className="flex items-center space-x-6">
                    {location.pathname !== '/' && (
                        <Link to="/" className="hover:text-green-200 transition-colors">Home</Link>
                    )}

                    {location.pathname !== '/products' && (
                        <Link to="/products" className="hover:text-green-200 transition-colors">Plants</Link>
                    )}

                    {location.pathname !== '/cart' && (
                        <Link to="/cart" className="relative flex items-center hover:text-green-200 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            {totalQuantity > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {totalQuantity}
                </span>
                            )}
                        </Link>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;