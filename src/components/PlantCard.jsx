import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../redux/cartSlice';

const PlantCard = ({ plant }) => {
    const dispatch = useDispatch();
    const [isAdded, setIsAdded] = useState(false);

    const handleAddToCart = () => {
        dispatch(addItemToCart(plant));
        setIsAdded(true);

        setTimeout(() => {
            setIsAdded(false);
        }, 2000);
    };

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
            <img
                src={plant.image}
                alt={plant.name}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{plant.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{plant.description}</p>
                <div className="flex justify-between items-center mt-4">
                    <span className="text-green-700 font-bold">${plant.price.toFixed(2)}</span>
                    <button
                        onClick={handleAddToCart}
                        disabled={isAdded}
                        className={`px-4 py-2 rounded-md font-medium ${
                            isAdded
                                ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
                                : 'bg-green-600 text-white hover:bg-green-700'
                        } transition-colors`}
                    >
                        {isAdded ? 'Added!' : 'Add to Cart'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PlantCard;