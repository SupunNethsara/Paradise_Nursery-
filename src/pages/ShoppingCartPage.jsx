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
            <div className="min-h-screen bg-gray-50">
                <Header />
                <div className="container mx-auto px-4 py-16 text-center">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">Your Cart is Empty</h1>
                    <p className="text-gray-600 mb-8">Add some beautiful plants to your cart!</p>
                    <Link
                        to="/products"
                        className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
                    >
                        Continue Shopping
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">Shopping Cart</h1>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Cart Items */}
                    <div className="lg:w-2/3">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-semibold">
                                    Your Items ({totalQuantity} {totalQuantity === 1 ? 'plant' : 'plants'})
                                </h2>
                            </div>

                            <div>
                                {items.map(item => (
                                    <CartItem key={item.id} item={item} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:w-1/3">
                        <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
                            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between">
                                    <span>Total Items:</span>
                                    <span>{totalQuantity}</span>
                                </div>
                                <div className="flex justify-between text-lg font-bold">
                                    <span>Total Cost:</span>
                                    <span>${totalAmount.toFixed(2)}</span>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <Link
                                    to="/products"
                                    className="block w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-4 rounded-lg text-center transition-colors"
                                >
                                    Continue Shopping
                                </Link>

                                <button
                                    onClick={handleCheckout}
                                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
                                >
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCartPage;