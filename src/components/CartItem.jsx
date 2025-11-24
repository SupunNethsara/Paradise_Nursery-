import React from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart, removeItemFromCart, deleteItemFromCart } from '../redux/cartSlice';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    const handleIncrease = () => {
        dispatch(addItemToCart({
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.image
        }));
    };

    const handleDecrease = () => {
        dispatch(removeItemFromCart(item.id));
    };

    const handleDelete = () => {
        dispatch(deleteItemFromCart(item.id));
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-4 hover:shadow-md transition-all duration-300">
            <div className="flex items-center space-x-4">
                <div className="relative">
                    <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-xl shadow-sm"
                    />
                    <div className="absolute -top-2 -right-2 bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        {item.quantity}
                    </div>
                </div>

                <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-800 truncate">{item.name}</h3>
                    <p className="text-emerald-600 font-medium">${item.price.toFixed(2)} each</p>
                    <div className="flex items-center space-x-2 mt-1">
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">🌱 Easy Care</span>
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">💧 Low Water</span>
                    </div>
                </div>

                <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-3 bg-gray-50 rounded-2xl px-4 py-2">
                        <button
                            onClick={handleDecrease}
                            className="w-8 h-8 bg-white rounded-full shadow-sm flex items-center justify-center text-gray-600 hover:text-emerald-600 hover:shadow-md transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
                            disabled={item.quantity <= 1}
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                            </svg>
                        </button>

                        <span className="text-lg font-bold text-gray-800 min-w-8 text-center">{item.quantity}</span>

                        <button
                            onClick={handleIncrease}
                            className="w-8 h-8 bg-emerald-500 text-white rounded-full shadow-sm flex items-center justify-center hover:bg-emerald-600 hover:shadow-md transition-all duration-200"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                        </button>
                    </div>

                    <div className="text-right min-w-24">
                        <p className="text-2xl font-bold text-emerald-600">${item.totalPrice.toFixed(2)}</p>
                        <p className="text-xs text-gray-500 mt-1">
                            ${item.price.toFixed(2)} × {item.quantity}
                        </p>
                    </div>

                    <button
                        onClick={handleDelete}
                        className="p-3 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-2xl transition-all duration-200 group"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        <span className="absolute opacity-0 group-hover:opacity-100 text-xs text-red-500 -bottom-6 left-1/2 transform -translate-x-1/2 transition-opacity duration-200">
                            Remove
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;