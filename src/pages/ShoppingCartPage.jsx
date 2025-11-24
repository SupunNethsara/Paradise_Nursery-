import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import CartItem from '../components/CartItem';

const ShoppingCartPage = () => {
    const { items, totalQuantity, totalAmount } = useSelector(state => state.cart);

    const handleCheckout = () => {
        alert('Coming Soon! Checkout functionality will be implemented in the future.');
    };

    if (items.length === 0) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
                <Header />
                <div className="container mx-auto px-4 py-16 text-center">
                    <div className="max-w-md mx-auto">
                        <div className="text-8xl mb-6">🛒</div>
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">Your Cart is Empty</h1>
                        <p className="text-gray-600 mb-8 text-lg">
                            It looks like your green friends haven't arrived yet. Let's find some beautiful plants to fill your space!
                        </p>
                        <Link
                            to="/products"
                            className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            Explore Our Plants
                            <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
            <Header />

            <div className="container mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Your Shopping Cart</h1>
                    <p className="text-gray-600 text-lg">
                        Review your selected plants and proceed to checkout
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
                    <div className="lg:w-2/3">
                        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
                            <div className="flex justify-between items-center mb-8 pb-6 border-b border-gray-100">
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-800">
                                        Your Green Collection
                                    </h2>
                                    <p className="text-gray-500 mt-1">
                                        {totalQuantity} {totalQuantity === 1 ? 'plant' : 'plants'} in your cart
                                    </p>
                                </div>
                                <div className="text-right">
                                    <div className="text-sm text-gray-500">Total Value</div>
                                    <div className="text-2xl font-bold text-emerald-600">${totalAmount.toFixed(2)}</div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {items.map(item => (
                                    <CartItem key={item.id} item={item} />
                                ))}
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-100">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm text-gray-600">Free shipping on orders over $50</span>
                                    <span className="text-sm font-semibold text-emerald-600">
                                        ${Math.max(0, 50 - totalAmount).toFixed(2)} to go
                                    </span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div
                                        className="bg-emerald-500 h-2 rounded-full transition-all duration-500"
                                        style={{ width: `${Math.min(100, (totalAmount / 50) * 100)}%` }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/3">
                        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sticky top-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>

                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                    <span className="text-gray-600">Items ({totalQuantity})</span>
                                    <span className="font-semibold">${totalAmount.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                    <span className="text-gray-600">Shipping</span>
                                    <span className="font-semibold text-emerald-600">
                                        {totalAmount >= 50 ? 'FREE' : '$9.99'}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                    <span className="text-gray-600">Tax</span>
                                    <span className="font-semibold">${(totalAmount * 0.08).toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between items-center py-4 border-t border-gray-200">
                                    <span className="text-lg font-bold text-gray-800">Total</span>
                                    <span className="text-2xl font-bold text-emerald-600">
                                        ${(totalAmount + (totalAmount >= 50 ? 0 : 9.99) + (totalAmount * 0.08)).toFixed(2)}
                                    </span>
                                </div>
                            </div>

                            <div className="bg-emerald-50 rounded-2xl p-4 mb-6 border border-emerald-100">
                                <h3 className="font-semibold text-emerald-800 mb-2">🎉 You're getting:</h3>
                                <ul className="text-sm text-emerald-700 space-y-1">
                                    <li>• Free care guide with every plant</li>
                                    <li>• 30-day plant health guarantee</li>
                                    <li>• Expert support included</li>
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <button
                                    onClick={handleCheckout}
                                    className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold py-4 px-6 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                                >
                                    Proceed to Checkout
                                </button>

                                <Link
                                    to="/products"
                                    className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-4 px-6 rounded-2xl text-center transition-all duration-300 border border-gray-200 hover:border-gray-300"
                                >
                                    Continue Shopping
                                </Link>
                            </div>

                            <div className="text-center mt-6 pt-6 border-t border-gray-100">
                                <div className="flex justify-center space-x-4 text-gray-500 text-sm">
                                    <div className="flex items-center">
                                        <span className="mr-2">🔒</span>
                                        Secure Checkout
                                    </div>
                                    <div className="flex items-center">
                                        <span className="mr-2">🌿</span>
                                        Plant Guarantee
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCartPage;