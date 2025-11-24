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
        <div className="bg-white rounded-lg shadow-md p-4 mb-4 flex items-center">
            <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-md"
            />
            <div className="ml-4 flex-grow">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">${item.price.toFixed(2)} each</p>
            </div>
            <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                    <button
                        onClick={handleDecrease}
                        className="bg-gray-200 hover:bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center"
                    >
                        -
                    </button>
                    <span className="font-medium">{item.quantity}</span>
                    <button
                        onClick={handleIncrease}
                        className="bg-gray-200 hover:bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center"
                    >
                        +
                    </button>
                </div>
                <div className="text-right w-24">
                    <p className="font-bold">${item.totalPrice.toFixed(2)}</p>
                </div>
                <button
                    onClick={handleDelete}
                    className="text-red-500 hover:text-red-700 ml-4"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default CartItem;